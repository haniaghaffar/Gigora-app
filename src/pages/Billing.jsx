import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  CreditCard,
  CalendarDays,
  BadgeCheck,
  CircleDollarSign,
} from "lucide-react";
import toast from "react-hot-toast";

const Billing = () => {
  const [cancelled, setCancelled] = useState(false);

  const [billingInfo, setBillingInfo] = useState({
    plan: "Free",
    price: "$0/month",
    date: "-",
    payment: "Not Added",
  });

  useEffect(() => {
    const plan = localStorage.getItem("subscription");

    if (plan === "pro") {
      const today = new Date();

      const nextBilling = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        today.getDate()
      );

      const formattedDate = nextBilling.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      setBillingInfo({
        plan: "Pro",
        price: "$9.99/month",
        date: formattedDate,
        payment: "Visa •••• 4242",
      });

      setCancelled(false);
    }

    if (plan === "cancelled") {
      setBillingInfo({
        plan: "Free",
        price: "$0/month",
        date: "-",
        payment: "Not Added",
      });

      setCancelled(true);
    }
  }, []);

  const handleCancelSubscription = () => {
    if (billingInfo.plan !== "Pro") return;

    localStorage.setItem("subscription", "cancelled");

    setBillingInfo({
      plan: "Free",
      price: "$0/month",
      date: "-",
      payment: "Not Added",
    });

    setCancelled(true);

    toast.success("Subscription cancelled successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 py-8 sm:py-12 px-4">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-extrabold text-primaryBlue text-center mb-3">
          Billing
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Manage your subscription and billing information.
        </p>


        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

          {/* Current Plan */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="text-primaryBlue" />
              <span className="font-semibold">
                Current Plan
              </span>
            </div>

            <span
              className={`px-4 py-1 rounded-full font-semibold ${
                billingInfo.plan === "Pro"
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {billingInfo.plan}
            </span>
          </div>


          {/* Price */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <CircleDollarSign className="text-primaryBlue" />
              <span className="font-semibold">
                Monthly Price
              </span>
            </div>

            <span className="font-bold">
              {billingInfo.price}
            </span>
          </div>


          {/* Billing Date */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-primaryBlue" />
              <span className="font-semibold">
                Next Billing Date
              </span>
            </div>

            <span>
              {billingInfo.date}
            </span>
          </div>


          {/* Status */}
          <div className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-primaryBlue" />
              <span className="font-semibold">
                Subscription Status
              </span>
            </div>

            <span
              className={`font-semibold ${
                billingInfo.plan === "Pro"
                  ? "text-green-600"
                  : cancelled
                  ? "text-red-500"
                  : "text-gray-500"
              }`}
            >
              {billingInfo.plan === "Pro"
                ? "Active"
                : cancelled
                ? "Cancelled"
                : "Free Plan"}
            </span>
          </div>


          {/* Payment */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CreditCard className="text-primaryBlue" />
              <span className="font-semibold">
                Payment Method
              </span>
            </div>

            <span>
              {billingInfo.payment}
            </span>
          </div>


          {/* Buttons */}
          <div className="pt-8 flex flex-col md:flex-row gap-4">

            <button
              onClick={handleCancelSubscription}
              disabled={billingInfo.plan !== "Pro"}
              className={`flex-1 py-3 rounded-xl text-white font-semibold transition ${
                billingInfo.plan !== "Pro"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              {cancelled
                ? "Subscription Cancelled"
                : billingInfo.plan === "Pro"
                ? "Cancel Subscription"
                : "No Active Subscription"}
            </button>


            <Link
              to="/pricing"
              className="flex-1 py-3 rounded-xl bg-primaryBlue hover:bg-darkNavy text-white text-center font-semibold transition"
            >
              Change Plan
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Billing;