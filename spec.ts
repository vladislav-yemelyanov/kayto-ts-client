type RequestPart<Params = never, Body = never> = [Params] extends [never]
  ? [Body] extends [never]
    ? never
    : { body: Body }
  : [Body] extends [never]
    ? { params: Params }
    : { params: Params; body: Body };

type ResponseData<
  ResponseType extends string,
  Data = never,
> = ResponseType extends "json"
  ? Data
  : ResponseType extends "blob"
    ? Blob
    : never;

type ApiRequest<Params = never, Body = never, Responses = never> = {
  responses?: Responses;
  request?: RequestPart<Params, Body>;
};

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;

// openapi schemas
interface Schemas {
  Schema1: { a: number };
  Schema2: { a: number };
  Schema3: { a: number };
}

// code generation
interface Requests {
  "/request": Expand<
    ApiRequest<
      never,
      never,
      {
        200: ResponseData<"json", Schemas["Schema3"]>;
      }
    >
  >;
  "/request1": Expand<
    ApiRequest<
      never,
      never,
      {
        200: ResponseData<"blob", Schemas["Schema3"]>;
      }
    >
  >;
}

// usage

// json response
const req: Requests["/request"] = {};

if (req.responses) {
  const json = req?.responses[200];
  json.a;
}

// blob response
const r1: Requests["/request1"] = {};

if (r1.responses) {
  const blob = r1.responses[200];
  blob.arrayBuffer();
}
