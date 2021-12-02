import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ContactForm from './ContactForm';

test('renders without errors', ()=>{
    render(<ContactForm />)
});

test('renders the contact form header', ()=> {

    // Arrange
    render(<ContactForm />)
    // Act
    const header = screen.queryByText('Contact Form')
    // Assert
    expect(header).toBeInTheDocument()

});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {

    // Arrange
    // Act
    // Assert

});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
    // Arrange
    // Act
    // Assert

});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
    // Arrange
    // Act
    // Assert

});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
    // Arrange
    // Act
    // Assert

});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
    // Arrange
    // Act
    // Assert

});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
    // Arrange
    // Act
    // Assert

});

test('renders all fields text when all fields are submitted.', async () => {

    // Arrange
    // Act
    // Assert

});