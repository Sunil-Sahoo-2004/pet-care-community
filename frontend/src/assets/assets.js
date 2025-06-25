import loginBback from './login-background.png'
import logo from './logo.png'
import googleLogo from './google-logo.png'
import facebookLogo from './facebook-logo.png'
import Profile from './Profile.jpg'
import header from './header-image.png'

import pet_1 from './pet-1.webp'
import pet_2 from './pet-2.jpg'
import pet_3 from './pet-3.jpg'

import catResource from './catResource.png'
import dogPark from './dogPark.png'
import vetClinic from './vetClinic.png'
import travelPet from './travelPet.png'

export const assets = {
    loginBback,
    logo,
    googleLogo,
    facebookLogo,
    Profile,
    header
}


export const pet_list = [
    {
        _id: "1",
        name: "Buddy",
        image: pet_1,
        age: '3 years',
        breed: "Golden Retriever",
        description: "Loves fetch, belly rubs, and long walks on the beach. Always up for an adventure!",
    },
    {
        _id: "2",
        name: "Whiskers",
        image: pet_2,
        age: '1.5 years',
        breed: "Siamese Cat",
        description: "A curious and elegant cat who enjoys sunbathing and chasing laser pointers. Very vocal and affectionate.",
    },
    {
        _id: "3",
        name: "Pip",
        image: pet_3,
        age: '6 months',
        breed: "Hamster",
        description: "A tiny explorer who loves his wheel and burrowing in his bedding. Enjoys sunflower seeds.",
    }
]



export const resource_list = [
  {
    id: 1,
    image: catResource,
    label: "Article",
    title: "Understanding Your Cat's Body",
  },
  {
    id: 2,
    image: dogPark,
    label: "Local Guide",
    title: "Top 5 Dog Parks in San Diego",
  },
  {
    id: 3,
    image: vetClinic,
    label: "Emergency Contact",
    title: "Emergency Vet Services Nearby",
  },
  {
    id: 4,
    image: travelPet,
    label: "Guide",
    title: "Tips for Traveling with Your Pet",
  },
];
