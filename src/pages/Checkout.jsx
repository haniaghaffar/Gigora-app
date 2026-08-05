import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import {
  CreditCard,
  Lock,
  ShieldCheck,
  BadgeCheck,
} from "lucide-react";


const Checkout = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);


  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    city: "",
    zip: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });



  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };



  const handlePayment = (e) => {

    e.preventDefault();


    for (const key in form) {

      if (!form[key]) {

        toast.error("Please fill all required fields.");
        return;

      }

    }


    setLoading(true);



    setTimeout(() => {


      // Activate Pro plan
      localStorage.setItem(
        "subscription",
        "pro"
      );


      // Save payment method
      localStorage.setItem(
        "paymentMethod",
        `Visa •••• ${form.cardNumber.slice(-4)}`
      );



      toast.success(
        "Payment Successful!"
      );


      setLoading(false);



      navigate(
        "/checkout/success"
      );


    }, 2000);

  };



  return (

    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-12 px-4">


      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">


        {/* Checkout Form */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl p-8">


          <div className="flex items-center gap-3 mb-6">

            <CreditCard className="text-primaryBlue"/>

            <h1 className="text-3xl font-bold">
              Secure Checkout
            </h1>

          </div>



          <form
            onSubmit={handlePayment}
            className="space-y-5"
          >


            <h2 className="font-bold text-lg">
              Billing Information
            </h2>



            <input
              className="w-full border rounded-xl p-3"
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />



            <input
              className="w-full border rounded-xl p-3"
              placeholder="Email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />



            <input
              className="w-full border rounded-xl p-3"
              placeholder="Country"
              name="country"
              value={form.country}
              onChange={handleChange}
            />



            <input
              className="w-full border rounded-xl p-3"
              placeholder="Address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />


            <div className="grid md:grid-cols-2 gap-4">

              <input
                className="border rounded-xl p-3"
                placeholder="City"
                name="city"
                value={form.city}
                onChange={handleChange}
              />


              <input
                className="border rounded-xl p-3"
                placeholder="Postal Code"
                name="zip"
                value={form.zip}
                onChange={handleChange}
              />

            </div>



            <h2 className="font-bold text-lg pt-3">
              Payment Details
            </h2>



            <input
              className="w-full border rounded-xl p-3"
              placeholder="Card Holder Name"
              name="cardName"
              value={form.cardName}
              onChange={handleChange}
            />



            <input
              className="w-full border rounded-xl p-3"
              placeholder="Card Number"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
            />



            <div className="grid grid-cols-2 gap-4">

              <input
                className="border rounded-xl p-3"
                placeholder="MM/YY"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
              />


              <input
                className="border rounded-xl p-3"
                placeholder="CVV"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
              />

            </div>



            <button
              type="submit"
              disabled={loading}
              className="w-full mt-6 bg-primaryBlue hover:bg-darkNavy text-white rounded-xl py-3 font-semibold transition"
            >

              {loading
                ? "Processing Payment..."
                : "Pay $9.99"}

            </button>


          </form>


        </div>




        {/* Order Summary */}


        <div className="bg-white rounded-2xl shadow-xl p-8 h-fit sticky top-6">


          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>



          <div className="flex justify-between mb-4">

            <span>
              Pro Plan
            </span>

            <span>
              $9.99
            </span>

          </div>



          <div className="flex justify-between mb-4">

            <span>
              Tax
            </span>

            <span>
              $0.00
            </span>

          </div>



          <hr className="my-4" />



          <div className="flex justify-between text-xl font-bold">

            <span>
              Total
            </span>

            <span>
              $9.99
            </span>

          </div>




          <div className="mt-8 space-y-4">


            <div className="flex items-center gap-3 text-green-600">

              <ShieldCheck size={18}/>

              Secure Payment

            </div>



            <div className="flex items-center gap-3 text-green-600">

              <Lock size={18}/>

              SSL Encrypted

            </div>



            <div className="flex items-center gap-3 text-green-600">

              <BadgeCheck size={18}/>

              Instant Activation

            </div>


          </div>


        </div>


      </div>


    </div>

  );

};


export default Checkout;