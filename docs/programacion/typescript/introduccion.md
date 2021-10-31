---
id: introduccion
title: Introducción a Typescript
sidebar_position: 1
---

## Instalación

```js
npm install -g typescript
```

## Declaración de variables

### Tipos y subtipos

**Tipos primitivos**:
* boolean
* number
* string
* void (ausencia de valor, como cuando una función no retorna nada)
* null 
* undefined
* enum

**Boleanos**
```ts
let flag: boolean;
```

**Numéricos y BigInteger**
``` ts
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;
```

**Cadenas**
``` ts
let s: string;
let empty = "";
let abc = 'abc';
let firstName: string = "Mateo";
let sentence: string = `My name is ${firstName}. I am new to TypeScript.`;
```

**Enum**
```ts
enum ContractStatus {
     Permanent = 1,
     Temp,
     Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);

console.log(ContractStatus[employeeStatus]);

```

**Any**
Nos permite asignar cualquier tipo de dato a nuestra variable. Es útil cuando no se sabe que entrada podríamos tener

```ts
let randomValue: any = 10;
randomValue = true;      // OK
randomValue = 'Mateo';   // OK
```

**Unknown**
La principal diferencia entre uno y otro, es que si el dato no tiene el método o propiedad, este no permite la interacción por lo cual no ejecuta.

```ts
let randomValue: unknown = 10;
randomValue = true;      // OK
randomValue = 'Mateo';   // OK

console.log(randomValue.name);  // Error: Object is of type unknown
randomValue();                  // Error: Object is of type unknown
randomValue.toUpperCase();      // Error: Object is of type unknown
```

