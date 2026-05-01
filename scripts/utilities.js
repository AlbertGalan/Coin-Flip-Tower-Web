import * as Avj from "https://cdn.jsdelivr.net/npm/ajv@6.9.2/dist/ajv.min.js";

export function validateBlog(posts) {

    const Ajv = window.Ajv;
    const ajv = new Ajv();

    const schemaBlog = {
        type: "object",
        properties: {
            title: { type: "string" },
            content: { type: "string", pattern: "^<p>.*</p>$"},
        },
        required: ["title", "content"],
        additionalProperties: false
    };

    const validateSchemaBlog = ajv.compile(schemaBlog);

    posts.data.forEach((post, index) => {

        if (!validateSchemaBlog(post)) {
            throw new Error("La validació dels posts ha fallat.");
        }
    })

}