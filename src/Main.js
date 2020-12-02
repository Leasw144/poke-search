// src/Main.js
import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import axios from 'axios';
import pokemon from 'pokemon';
import Pokemon from './components/Pokemon';

const POKE_API_BASE_URL = 'https://pokeapi.co/api/v2';

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false, // decides whether to show the activity indicator or not
      searchInput: '', // the currently input text
      name: '', // Pokémon name
      pic: '', // Pokémon image URL
      types: [], // Pokémon types array
      desc: '', // Pokémon description
    };
  }

}