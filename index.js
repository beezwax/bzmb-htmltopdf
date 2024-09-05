const convertMod = require("./convert.js");

const convertSchema = {
  body: {
    type: "object",
    required: [
      "html"
    ],
    properties: {
      html: { type: "string" },
      options: { type: "object" }
  }}
};

async function bzmbConvert(fastify, options) {
  fastify.post(
    "/bzmb-htmltopdf-convert",
    { schema: convertSchema },
    async (req, res) => {
      try {
        // let pdf;
        convertMod(async function(convert){
          const pdf = await convert(req.html, req.options);
          console.log(pdf);
          
          res
            .code(200)
            .send(pdf);
        });
        // res
        //   .code(200)
        //   .send(pdf);
      } catch (error) {
        res
          .code(500)
          .send(error);
      }
    }
  )
}

module.exports = { microbond: bzmbConvert };