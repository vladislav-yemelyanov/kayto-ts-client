## Kayto TypeScript Client — End-to-End Type-Safe API Client

This is the future API client designed to work seamlessly with [Kayto](https://github.com/vladislav-yemelyanov/kayto) 🦀.

I’ve already finished an extremely powerful, fully type-safe API specification layer in `spec.ts`.

### Roadmap

- [x] **API Specification** — Complete

  A fully type-safe, compiler-enforced OpenAPI-like contract built entirely in TypeScript using conditional types, mapped types, and inference tricks. Accurate, zero runtime cost, perfect IDE support

- [ ] **API Client Layer** — Next

  A lightweight, zero-dependency client wrapper on top of the specification that provides:
  • 100% type-safe requests & responses (including correct `Blob`, `json`, etc.)
  • Full autocomplete and compile-time validation
  • Seamless integration with Kayto
