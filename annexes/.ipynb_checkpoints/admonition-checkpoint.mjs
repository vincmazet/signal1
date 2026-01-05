// Remarque
const Remark = {
    
    name    : "remarque",
    doc     : "Custom admonition for a remark.",
    arg     : {},
    options : {},
    body    : { type: String, doc: "The body of the directive." },
    
    run(data, vfile, ctx) {
        var title = {
            type: "text",
            value: "Remarque",
        };
        const admonition = {
            "type": "admonition",
            "kind": "note",
            "children": [
                {
                    "type": "admonitionTitle",
                    "children": [title]
                },
                {
                    "type": "paragraph",
                    "children": ctx.parseMyst(data.body.trim())["children"][0]["children"]
                }
            ]
        }
        
        return [admonition];
    }
};
const plugin = { name: "Remark", directives: [Remark] };

export default plugin;