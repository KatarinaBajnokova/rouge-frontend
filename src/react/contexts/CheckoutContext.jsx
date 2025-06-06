import React, { createContext, useContext, useState, useEffect } from 'react';

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [personalInfo, setPersonalInfo] = useState(() => {
    return JSON.parse(localStorage.getItem('checkout_personal')) || {};
  });
  const [friendInfo, setFriendInfo] = useState(() => {
    return JSON.parse(localStorage.getItem('checkout_friend')) || {};
  });
  const [addressInfo, setAddressInfo] = useState(() => {
    return JSON.parse(localStorage.getItem('checkout_address')) || {};
  });
  const [paymentMethod, setPaymentMethod] = useState(() => {
    return JSON.parse(localStorage.getItem('checkout_payment')) || {};
  });

  useEffect(() => {
    localStorage.setItem('checkout_personal', JSON.stringify(personalInfo));
  }, [personalInfo]);

  useEffect(() => {
    localStorage.setItem('checkout_friend', JSON.stringify(friendInfo));
  }, [friendInfo]);

  useEffect(() => {
    localStorage.setItem('checkout_address', JSON.stringify(addressInfo));
  }, [addressInfo]);

  useEffect(() => {
    localStorage.setItem('checkout_payment', JSON.stringify(paymentMethod));
  }, [paymentMethod]);

  return (
    <CheckoutContext.Provider
      value={{
        personalInfo,
        setPersonalInfo,
        friendInfo,
        setFriendInfo,
        addressInfo,
        setAddressInfo,
        paymentMethod,
        setPaymentMethod,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export function useCheckout() {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error('useCheckout must be used within a CheckoutProvider');
  }
  return context;
}
