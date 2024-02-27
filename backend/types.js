const z = require("zod");

const createTODO = z.object({
    title : z.string(),
    description : z.string()
});

const updateTODO = z.object({
    id : z.string()
})

module.exports = {
    createTODO,
    updateTODO
};