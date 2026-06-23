# TypeScript Interview Guide

A professional one-page reference for common TypeScript interview questions and concise answers.

## Overview
This guide covers 10 common TypeScript interview questions with clear, practical answers. It is designed for developers preparing for TypeScript interviews or anyone who wants a quick refresher on essential TypeScript concepts.

---

## 1. What is TypeScript?
TypeScript is a **superset of JavaScript** that adds **static typing** and compiles down to plain JavaScript. It enables safer code through type checking while remaining compatible with existing JavaScript projects.

---

## 2. Why use TypeScript?
TypeScript is useful because it:
- Helps catch errors early during development
- Improves code readability and maintainability
- Provides better tooling support such as autocomplete, refactoring, and type checking

---

## 3. What is the difference between `any` and `unknown`?
- `any`: disables type checking and can be unsafe because values can be used without validation.
- `unknown`: is safer, requiring explicit type checks before using the value.

---

## 4. What is `interface` in TypeScript?
An `interface` defines the **structure of an object** by specifying property names and types. It is often used to describe object shapes and enforce consistent data contracts.

---

## 5. Difference between `type` and `interface`?
- `interface`: best for describing object shapes and supports declaration merging.
- `type`: supports unions, intersections, tuples, and other advanced type expressions.

---

## 6. What are Union Types?
Union types allow a variable to hold one of several types.

```ts
let id: string | number;
```

This is useful when a value can be more than one type.

---

## 7. What are Generics?
Generics allow reusable functions or classes to work with flexible types while preserving type safety.

```ts
function identity<T>(value: T): T {
  return value;
}
```

---

## 8. What is Type Inference?
Type inference means TypeScript automatically determines the type of a variable when it is not explicitly declared.

```ts
let name = "Riad"; // inferred as string
```

---

## 9. What is a Tuple in TypeScript?
A tuple is a fixed-length array with a defined type for each element.

```ts
let user: [string, number] = ["Riad", 23];
```

---

## 10. What is `readonly` in TypeScript?
The `readonly` modifier makes a property immutable after assignment.

```ts
type User = {
  readonly id: number;
};
```

A `readonly` property cannot be changed once it has been set.

---

## Notes
This guide is ideal for interview preparation and can be extended with additional TypeScript concepts such as modules, decorators, namespaces, and advanced type operators.
