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
        let pdf;
        const convertMod = require("./convert.js").then(async function(convert) {
          try {
            pdf = await convert('<!DOCTYPE html><html><body><h1>Hello World</h1></body></html>');
            resolve(pdf)
          } catch (err) {
            reject(err);
          }
          
          // console.log(pdf);
          // res
          //   .code(200)
          //   .send(pdf ? pdf : "No PDF generated");
        }).then(function(pdf) {
          res
            .code(200)
            .send(pdf ? pdf : "No PDF generated");
        }).catch(function(err){
          res
            .code(500)
            .send(err.toString())

        });
        // let pdf;
        // const convertMod = require("./convert.js");
        // console.log(convertMod);
        
        // console.log(convertMod);
        
        // convertMod(async function(convert){
        //   const pdf = await convert(req.html, req.options);
        //   console.log(pdf);
          
        //   // res
        //   //   .code(200)
        //   //   .send(pdf ? pdf : "No PDF generated");
        // });
        // res
        //   .code(200)
        //   .send("Placeholder");
      } catch (error) {
        res
          .code(500)
          .send(error);
      }
    }
  )
}

module.exports = { microbond: bzmbConvert };