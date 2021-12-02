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
    render(<ContactForm />)
    // Act
    const nameErrorMessage = screen.queryByText('Error: firstName must have at least 5 characters.')
    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert
    expect(nameErrorMessage).toBeInTheDocument()

});

test('renders THREE error messages if user enters no values into any fields.', async () => {
    
    // Arrange
    render(<ContactForm />)
    // Act

    const fNameErrorMessage = screen.queryByText('Error: firstName must have at least 5 characters.')
    const lNameErrorMessage = screen.queryByText('Error: lastName is a required field.')
    const emailErrorMessage = screen.queryByText('Error: email must be a valid email address.')

    // 1. Find button
    const button = screen.getByRole("button");
    // 2. Click button
    userEvent.click(button);

    // Assert
    expect(fNameErrorMessage).toBeInTheDocument()
    expect(lNameErrorMessage).toBeInTheDocument()
    expect(emailErrorMessage).toBeInTheDocument()

});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
    
    // Arrange
    render(<ContactForm />)
    // Act

    const emailErrorMessage = screen.queryByText('Error: email must be a valid email address.')

    const fNameInput = screen.queryByLabelText('First Name*') 
    const lNameInput = screen.queryByLabelText('Last Name*') 
    userEvent.type(fNameInput, "Peter")
    userEvent.type(lNameInput, "Conley")

    const button = screen.getByRole("button");
    userEvent.click(button);

    // Assert

    expect(emailErrorMessage).toBeInTheDocument()


});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {
    
    // Arrange
    render(<ContactForm />)
    // Act

    const fNameInput = screen.queryByLabelText('First Name*') 
    const lNameInput = screen.queryByLabelText('Last Name*') 
    userEvent.type(fNameInput, "Peter")
    userEvent.type(lNameInput, "Conley")
    const emailInput = screen.queryByLabelText('Email*') 
    userEvent.type(emailInput, "Peter")
    const button = screen.getByRole("button");
    userEvent.click(button);
    const emailErrorMessage = screen.queryByText('Error: email must be a valid email address.')

    // Assert

    expect(emailErrorMessage).toBeInTheDocument();

});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
    
    // Arrange
    render(<ContactForm />)
    // Act
    const fNameInput = screen.queryByLabelText('First Name*') 
    userEvent.type(fNameInput, "Peter")
    const emailInput = screen.queryByLabelText('Email*') 
    userEvent.type(emailInput, "Peter@gmail.com")
    const button = screen.getByRole("button");
    userEvent.click(button);
    const lNameErrorMessage = screen.queryByText('Error: lastName is a required field.')

    // Assert

    expect(lNameErrorMessage).toBeInTheDocument();

});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {
    
    // Arrange
    render(<ContactForm />)
    // Act
    // Assert

});

test('renders all fields text when all fields are submitted.', async () => {

    // Arrange
    render(<ContactForm />)
    // Act
    // Assert

});