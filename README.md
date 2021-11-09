# Adomik React App

This project is designed to collect data from the Adomik backend

## How it works

The app is API-agnostic and uses cache storage.
On mount, it fetches data from cache or calls API endpoints if no data has been found in cache.

Data is mapped to a custom model (Product or User) that the app passes to the view. Any change to the state is stored in cache in a serialized version.

The app is easily adaptable to new APIs. Just add the new endpoint to the list of authorized `apiEndpoints` in /apis and add the necessary state and setState in App.js.

## Endpoints

/components

```
[
  {
    product: {
      code: "report",
      label: "Report"
    },
    children: [
      {
        code: "dropdown",
        component_identifier: "dropdown",
        data: [
          {
            id: "paris",
            label: "Paris"
          },
          {
            id: "grenoble",
            label: "Grenoble"
          },
          {
            id: "lyon",
            label: "Lyon"
          },
          {
            id: "geneve",
            label: "Geneve"
          },
          {
            id: "marseille",
            label: "Marseille"
          }
        ]
      }
    ]
  },
  {
    product: {
      code: "benchmark",
      label: "Benchmark"
    },
    children: [
      {
        code: "benchmark_dropdown",
        component_identifier: "dropdown",
        data: [
          {
            id: "new-york",
            label: "New York"
          },
          {
            id: "berlin",
            label: "Berlin"
          },
          {
            id: "los-angeles",
            label: "Los Angeles"
          },
          {
            id: "amsterdam",
            label: "Amsterdam"
          },
          {
            id: "singapour",
            label: "Singapour"
          }
        ]
      }
    ]
  }
]

```

/users

```
[
  ({
    id: 1,
    ville: "Paris",
    prenom: "Giacomo",
    nom: "Guilizzoni",
    right: "admin"
  },
  {
    id: 2,
    ville: "Grenoble",
    prenom: "Marco",
    nom: "Tuttofare",
    right: "read"
  },
  {
    id: 3,
    ville: "Lyon",
    prenom: "Jean Michel",
    nom: "Aulas",
    right: "read"
  },
  {
    id: 4,
    ville: "Geneve",
    prenom: "Valerie",
    nom: "Liberty",
    right: "admin"
  },
  {
    id: 5,
    ville: "Marseille",
    prenom: "Thomas",
    nom: "Chuster",
    right: "admin"
  },
  {
    id: 6,
    ville: "Singapour",
    prenom: "Nicky",
    nom: "Larson",
    right: "read"
  },
  {
    id: 7,
    ville: "Amsterdam",
    prenom: "Nicolas",
    nom: "Weed",
    right: "admin"
  },
  {
    id: 8,
    ville: "Los Angeles",
    prenom: "Jason",
    nom: "Bourne",
    right: "read"
  },
  {
    id: 9,
    ville: "New York",
    prenom: "T.J",
    nom: "Hooker",
    right: "admin"
  },
  {
    id: 10,
    ville: "Singapour",
    prenom: "Frane",
    nom: "Fine",
    right: "read"
  },
  {
    id: 11,
    ville: "Amsterdam",
    prenom: "Scarlett",
    nom: "Johansson",
    right: "admin"
  },
  {
    id: 12,
    ville: "Los Angeles",
    prenom: "Antonio",
    nom: "Banderas",
    right: "read"
  },
  {
    id: 13,
    ville: "Berlin",
    prenom: "Papa",
    nom: "Schultz",
    right: "admin"
  })
]

```
