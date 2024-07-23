```typescript
//	Type: string, number, boolean, Date, Todo, ...
//	Primitive Type: number, boolean, void, undefined, string, symbol, null
//	Object Types: functions, arrays, classes, objects

// when to use type annotations
// 1) 	Function that returns the 'any' type
// 2)   Declare a variable and initalizate seperately;
// 3)   Variable whose type cannot be inferred correctly

const carsByMike: string[][] = [
    [],
    [],
    []
];

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2024-12-31']

// tuple types
const pepsi: [string, number, boolean] = ['brown', 40, true]
```

