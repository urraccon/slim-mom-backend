import joiToSwagger from 'joi-to-swagger';

export function joiToSwaggerWithExamples(joiSchema, examples = {}) {
  const { swagger } = joiToSwagger(joiSchema);

  for (const key in examples) {
    if (swagger.properties?.[key]) {
      if (
        swagger.properties[key].type === 'object' &&
        examples[key] &&
        typeof examples[key] === 'object'
      ) {
        for (const prop in examples[key]) {
          if (swagger.properties[key].properties?.[prop]) {
            swagger.properties[key].properties[prop].example =
              examples[key][prop];
          }
        }
      } else {
        swagger.properties[key].example = examples[key];
      }
    }
  }

  return swagger;
}
