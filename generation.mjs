#!/usr/bin/env node

import yargs from 'yargs';
import inquirer from 'inquirer';
import { hideBin } from 'yargs/helpers';
import { lowLetters, capLetters, digits, specialChar } from './lib/constantes.js';
import mixPassword from './lib/utils/mixPassword.mjs';

yargs(hideBin(process.argv))
  .command('gen', 'Starting generation of a password', () => { }, async () => {

    let regenerate = true;

    while (regenerate) {
      let charactersLength = 0;
      let password = '';

      const initialSelection = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'lowLettersBool',
          message: 'Do you want to include letters ? (a-z)',
          default: true
        },
        {
          type: 'confirm',
          name: 'lettersCapBool',
          message: 'Do you want to include capital letters ? (A-Z)',
          default: true
        },
        {
          type: 'confirm',
          name: 'digitsBool',
          message: 'Do you want to include numbers ? (0-9)',
          default: true
        },
        {
          type: 'confirm',
          name: 'specialCharBool',
          message: 'Do you want to include special characters ? (!@#$%^&*()-_=+[]{}|\\:;\'"<>,.?/`~)',
          default: true
        }
      ]);

      if (initialSelection.lowLettersBool) {
        const lowLettersCount = await inquirer.prompt([ 
          {
            type: 'number',
            name: 'lowLettersCount',
            message: 'How many lowercase letters do you want to include ?',
            validate: (input) => {
              const value = parseInt(input, 10);
              if (isNaN(value) || value <= 0) {
                return 'Please enter a valid number greater than 0';
              }
              return true;
            }
          }
        ]);
        charactersLength += lowLettersCount.lowLettersCount;
        for (let i = 0; i < lowLettersCount.lowLettersCount; i++) {
          password += lowLetters[Math.floor(Math.random() * lowLetters.length)];
        }
        console.log(
          `You choose to include ${lowLettersCount.lowLettersCount} lowercase letters | total: ${charactersLength}`
        );
      }

      if (initialSelection.lettersCapBool) {
        const capLettersCount = await inquirer.prompt([
          {
            type: 'number',
            name: 'capLettersCount',
            message: 'How many capital letters do you want to include ?',
            validate: (input) => {
              const value = parseInt(input, 10);
              if (isNaN(value) || value <= 0) {
                return 'Please enter a valid number greater than 0';
              }
              return true;
            }
          }
        ]);
        charactersLength += capLettersCount.capLettersCount;
        for (let i = 0; i < capLettersCount.capLettersCount; i++) {
          password += capLetters[Math.floor(Math.random() * capLetters.length)];
        }
        console.log(
          `You choose to include ${capLettersCount.capLettersCount} capital letters | total: ${charactersLength}`
        );
      }

      if (initialSelection.digitsBool) {
        const digitsCount = await inquirer.prompt([
          {
            type: 'number',
            name: 'digitsCount',
            message: 'How many numbers do you want to include ?',
            validate: (input) => {
              const value = parseInt(input, 10);
              if (isNaN(value) || value <= 0) {
                return 'Please enter a valid number greater than 0';
              }
              return true;
            }
          }
        ]);
        charactersLength += digitsCount.digitsCount;
        for (let i = 0; i < digitsCount.digitsCount; i++) {
          password += digits[Math.floor(Math.random() * digits.length)];
        }
        console.log(
          `You choose to include ${digitsCount.digitsCount} numbers | total: ${charactersLength}`
        );
      }

      if (initialSelection.specialCharBool) {
        const specialCharCount = await inquirer.prompt([
          {
            type: 'number',
            name: 'specialCharCount',
            message: 'How many special characters do you want to include ?',
            validate: (input) => {
              const value = parseInt(input, 10);
              if (isNaN(value) || value <= 0) {
                return 'Please enter a valid number greater than 0';
              }
              return true;
            }
          }
        ]);
        charactersLength += specialCharCount.specialCharCount;
        for (let i = 0; i < specialCharCount.specialCharCount; i++) {
          password += specialChar[Math.floor(Math.random() * specialChar.length)];
        }
        console.log(
          `You choose to include ${specialCharCount.specialCharCount} special characters | total: ${charactersLength}`
        );
      }

      password = mixPassword(password);

      console.log('\n+--------------------------------------------+');
      console.log(`|      Your password is: ${password}           |`);
      console.log('+----------------------------------------------+\n');

      const regenerateChoice = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'regenerateChoice',
          message: 'Do you want to retry ?',
          default: false,
        },
      ]);

      regenerate = regenerateChoice.regenerateChoice;
    }
  }).argv;
