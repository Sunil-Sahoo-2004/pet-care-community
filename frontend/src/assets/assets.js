import loginBback from './login-background.png'
import logo from './logo.png'
import googleLogo from './google-logo.png'
import facebookLogo from './facebook-logo.png'
import Profile from './Profile.jpg'
import header from './header-image.png'
import ringing from './ringing.png'
import successAnimation from './Animation - 1751286654114.json'
import user from './user.png'
import AdoptionHeader from './Adoption-header.png'
import delete_icon from './delete.gif'

import pet_1 from './pet-1.webp'
import pet_2 from './pet-2.jpg'
import pet_3 from './pet-3.jpg'

import catResource from './catResource.png'
import dogPark from './dogPark.png'
import vetClinic from './vetClinic.png'
import travelPet from './travelPet.png'

import { FaHeart, FaPaw } from 'react-icons/fa';
import { BsChatDots } from 'react-icons/bs';

import dog from './dog.avif';
import cat from './cat.jpg';
import puppy from './puppy.webp';
import guinea from './gunia.jpg';
import parrots from './parrots.jpg';

import sarah from './sarah.webp'; 
import michael from './michael.jpeg';

import partner1 from './PetCare-Clinic.png';
import partner2 from './Happy-Tails-Rescue.png';
import partner3 from './Bark-Box.png';
import partner4 from './Chewy.png';
import partner5 from './PetSmart-Charities.png';
import partner6 from './The-Humane-Society.png';


export const assets = {
    loginBback,
    logo,
    googleLogo,
    facebookLogo,
    Profile,
    header,
    ringing,
    successAnimation,
    user,
    AdoptionHeader,
    delete_icon
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



export const offers = [
  {
    icon: FaHeart,
    title: 'Find Your Fur-ever Friend',
    description: 'Browse a wide selection of adoptable pets from local shelters and rescues, waiting for their loving homes.',
  },
  {
    icon: FaPaw,
    title: 'Discover Top-Rated Services',
    description: 'Connect with trusted local pet groomers, trainers, vets, and sitters with reviews and ratings from our community.',
  },
  {
    icon: BsChatDots,
    title: 'Join Our Caring Community',
    description: 'Engage in lively discussions, share experiences, and get advice from fellow pet enthusiasts in our active forum.',
  }
];


export const articles = [
  {
    image: dog,
    title: 'Top 10 Tips for a Happy Dog Walk',
    desc: 'Transform your daily dog walk into a joyful adventure. Learn how to make it more engaging and beneficial for both.',
  },
  {
    image: cat,
    title: 'Enriching Indoor Playtime for Cats',
    desc: 'Keep your feline friend entertained and stimulated indoors. Discover creative games and activities that cater to their needs.',
  },
  {
    image: puppy,
    title: 'Puppy Training 101: Basic Commands',
    desc: 'Start your puppy’s training journey on the right paw. This guide covers essential basic commands like sit, stay, and come.',
  },
  {
    image: guinea,
    title: 'The Ultimate Guide to Guinea Pig Care',
    desc: 'Ensure your small companions thrive with this comprehensive care guide. From diet and housing to common issues.',
  },
  {
    image: parrots,
    title: 'Healthy Diets for Parrots: What to Feed?',
    desc: 'Unlock the secrets to a balanced diet for your feathered friend. This article details the ideal nutritional needs for parrots, ensuring they receive all the vitamins and minerals for a vibrant life...',
  },
  {
    image: parrots,
    title: 'Healthy Diets for Parrots: What to Feed?',
    desc: 'Unlock the secrets to a balanced diet for your feathered friend. This article details the ideal nutritional needs for parrots, ensuring they receive all the vitamins and minerals for a vibrant life...',
  }
];

export const reviews = [
  {
    name: 'Sarah L.',
    role: 'Dog Owner & Volunteer',
    img: sarah,
    text: "Joining Pawsitively Connected has been a game-changer! I found amazing support for my rescue dog's anxiety, and the local event listings are fantastic. It truly feels like a family.",
  },
  {
    name: 'Michael T.',
    role: 'Cat Parent',
    img: michael,
    text: "As a first-time cat owner, the expert articles here have been invaluable. I love how easy it is to find reliable information and connect with other enthusiasts. Highly recommend!",
  },
  {
    name: 'Michael T.',
    role: 'Cat Parent',
    img: michael,
    text: "As a first-time cat owner, the expert articles here have been invaluable. I love how easy it is to find reliable information and connect with other enthusiasts. Highly recommend!",
  }
];


export const partners = [
  { 
    img: partner1, 
    name: 'PetCare Clinic' 
  },
  { 
    img: partner2, 
    name: 'Happy Tails Rescue' 
  },
  { 
    img: partner3, 
    name: 'Bark Box' 
  },
  { 
    img: partner4, 
    name: 'Chewy' 
  },
  { 
    img: partner5, 
    name: 'PetSmart Charities' 
  },
  { 
    img: partner6, 
    name: 'The Humane Society' 
  },
];