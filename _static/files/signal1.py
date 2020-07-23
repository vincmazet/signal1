def haar(N):
    """Ondelettes de Haar 1D.
    
    N : nombre de fonctions de la base de Haar.
    
    vincent.mazet@unistra.fr, 20/07/2020
    """

    import numpy as np
    
    # Format de base
    f = [1, -1]
    
    # Premier signal (constant)
    h = np.ones(N)
    h = h / np.linalg.norm(h)
    hh = [h]      
    
    K = np.log2(N)
    for k in np.arange(K, 0, -1):

        # Longueur de la partie non nulle de l'ondelette
        T = 2**k
        
        # Nombre de morceaux non nuls dans l'ondelette, pour la taille considérée
        L = int(N/T)
        
        # Crée l'ondelette
        for i in range(L):
            
            M = int(T/2)
            x = np.kron( f, [1.]*M)
            idx = np.zeros(L)
            idx[i] = 1
            h = np.kron(idx, x)            
            h = h / np.linalg.norm(h)
            hh.append(h)
            
    return hh