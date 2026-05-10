import * as Avj from "https://cdn.jsdelivr.net/npm/ajv@6.9.2/dist/ajv.min.js";

export function validateBlog(posts) {

    const Ajv = window.Ajv;
    const ajv = new Ajv();

    const schemaBlog = {
        type: "object",
        properties: {
            title: { type: "string" },
            content: { type: "string" },
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

export function validateUsers(users) {
    const Ajv = window.Ajv;
    const ajv = new Ajv();

    const schemaBlog = {
        type: "object",
        properties: {
            name: { type: "string" },
            puntuacion: { type: "integer", minimun: 1},
        },
        required: ["name", "puntuacion"],
        additionalProperties: false
    };

    const validateSchemaBlog = ajv.compile(schemaBlog);

    users.data.forEach((users, index) => {

        if (!validateSchemaBlog(users)) {
            throw new Error("La validació dels posts ha fallat.");
        }
    })
}

export function validateOpinions(opinions) {
    const Ajv = window.Ajv;
    const ajv = new Ajv();

    const schemaBlog = {
        type: "object",
        properties: {
            title: { type: "string" },
            content: { type: "string" },
        },
        required: ["title", "content"],
        additionalProperties: false
    };

    const validateSchemaBlog = ajv.compile(schemaBlog);

    opinions.data.forEach((opinion, index) => {

        if (!validateSchemaBlog(opinion)) {
            throw new Error("La validació dels posts ha fallat.");
        }
    })
}