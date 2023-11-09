"""
Module Python pour le TP sur la mesure du son.

Copyright Université de Strasbourg 2023 (2023-03-15, 2023-11-03)
Contributeurs : pierre.misiuk@etu.unistra.fr
                mathieu.schwoerer@etu.unistra.fr
                vincent.mazet@unistra.fr
"""

import sounddevice as sd
import scipy.io.wavfile
import matplotlib.pyplot as plt
import numpy as np
import threading
import subprocess


def init_volume():
    """
    Permet de régler le volume de l'ordinateur pour assurer une bonne acquisition.
    
    Entrées :
    aucune
    
    Sortie :
    aucune
    """
    val = 100
    val = float(int(val))
    proc = subprocess.Popen('/usr/bin/amixer sset Master ' + str(val) + '%', shell=True, stdout=subprocess.PIPE)
    proc.wait()
    val = 15
    val = float(int(val))
    proc = subprocess.Popen('/usr/bin/amixer sset Capture ' + str(val) + '%', shell=True, stdout=subprocess.PIPE)
    proc.wait()


def read_signal(file):
    """
    Permet de créer un tableau avec les valeurs d'un fichier son. 
    
    Entrées :
    file (string)      : nom du fichier audio.
    
    Sortie :
    data_left (tableau) : Données du premier canal.
    data_right (tableau) : Données du deuxième canal.
    """
    rate, data = scipy.io.wavfile.read(file)#Lecture du fichier où l'acquisition a été enregistrée 
    data_right = data[:,1]
    data_left = data[:,0]
    return data_left,data_right


def play_signal(signal, sample_rate):
    """
    Jouer un son sur l'haut-parleur.
    
    Entrées :
    signal (array)      : signal.
    sample_rate (int)      : fréquence d'échantillonnage.
    
    Sortie :
    aucune
    """
    sd.play(signal, sample_rate)
    sd.wait()


def record(time):
    """
    Permet de faire une acquisition des deux micros durant "time" secondes.
    
    Entrées :
    time (int)  : durée de l'acquisition en secondes. 
    
    Sortie :
    data_left : tableau contenant l'enregistrement du canal 1.
    data_right : tableau contenant l'enregistrement du canal 2.
    """
    sample_rate=44100
    channels=2
    recorded_audio = sd.rec(int(time * sample_rate), samplerate=sample_rate, channels=channels)
    sd.wait()  # Attendre la fin de l'enregistrement
    # Enregistrer les données audio dans un fichier WAV

    data_right = recorded_audio[:,1]
    data_left = recorded_audio[:,0]
    
    return data_left,data_right
    
    
# Fonction pour enregistrer le son du microphone
def play_and_record(signal_type, time):
    """
    Acquisition du son via microphone.
    
    Entrées
    -------
    signal_type : string
        Nom du signal envoyé par le haut-parleur :
        - "whitenoise" : bruit blanc
        - "sinus" : sinusoïde de fréquence 440 Hz
        - "clap" : simulation d'un claquement avec une sinusoïde
    time : float
        Durée de l'enregistrement en seconde.
    
    Sortie
    ------
    data_left : Numpy array
        Enregistrement du canal 1
    data_right : Numpy array
        Enregistrement du canal 2
    samples : Numpy array
        Signal émis
    """

    if time==0:
        duration=5
    else:
        duration = int((5*time)/3)  # Durée de l'enregistrement en secondes
    sample_rate = 44100  # Fréquence d'échantillonnage en Hz
    channels = 2

    t = np.linspace(0,1*time,int(sample_rate),endpoint=False)

    
    if signal_type == "whitenoise":
        zeros = np.zeros((duration-time)*sample_rate)
        samples = np.random.normal(0, 1, time*sample_rate)
        signal = np.concatenate((zeros,samples))
    elif signal_type == "pinknoise":
        zeros = np.zeros((duration-time)*sample_rate)
                # Génération du bruit rose
        b = [0.049922035, -0.095993537, 0.050612699, -0.004408786]
        a = [1, -2.494956002, 2.017265875, -0.522189400]
        pink_noise = np.zeros(time*sample_rate)
        pink_noise[0] = np.random.normal()
        for i in range(1, time*sample_rate):
            white_noise = np.random.normal()
            pink_noise[i] = b[0] * white_noise + \
                b[1] * pink_noise[i - 1] + \
                b[2] * pink_noise[max(0, i - 2)] + \
                b[3] * pink_noise[max(0, i - 3)]
            pink_noise[i] /= a[0] + \
                a[1] * pink_noise[max(0, i - 1)] + \
                a[2] * pink_noise[max(0, i - 2)] + \
                a[3] * pink_noise[max(0, i - 3)]
        samples=pink_noise
        signal = np.concatenate((zeros,samples))    
    elif signal_type == "sinus":
        zeros = np.zeros((duration-time)*sample_rate)
        frequency = 440  # Hz
        samples = (np.sin(2 * np.pi * np.arange(sample_rate * time ) * frequency / sample_rate)).astype(np.float32)
        signal = np.concatenate((zeros,samples))
    elif signal_type == "clap":
        zeros = np.zeros((duration-time)*sample_rate)
        samples=np.sin(2*np.pi*500*t)*np.exp(-5*t)
        signal = np.concatenate((zeros,samples))
    elif signal_type == "edge":
        zeros = np.zeros((duration-time)*sample_rate)
        frequency = 440  # Hz
        samples = np.sign((np.sin(2 * np.pi * np.arange(sample_rate * time ) * frequency / sample_rate))).astype(np.float32)
        signal = np.concatenate((zeros,samples))
    elif signal_type == "triangle":
        zeros = np.zeros((duration-time)*sample_rate)
        frequency = 440  # Hz
        samples = np.arcsin(np.sin(2*np.pi*frequency*t))
        signal = np.concatenate((zeros,samples))
    elif signal_type == "sawtooth":
        zeros = np.zeros((duration-time)*sample_rate)
        frequency = 440  # Hz
        samples = 2*(t*2*np.pi*frequency - 2*np.floor((t*2*np.pi*frequency+1)/2))
        signal = np.concatenate((zeros,samples))
    else:
        print("Type de signal non reconnu.")
        return

    # Démarrer un thread pour lire le signal sur les haut-parleurs
    play_thread = threading.Thread(target=play_signal, args=(signal, sample_rate))
    play_thread.start()

    # Enregistrer le son du microphone dans un fichier WAV
    recorded_audio = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=channels)
    sd.wait()  # Attendre la fin de l'enregistrement
    # Attendre la fin de la lecture du signal sur les haut-parleurs
    play_thread.join()

    data_right = recorded_audio[:,1]
    data_left = recorded_audio[:,0]

    return data_left, data_right, samples
