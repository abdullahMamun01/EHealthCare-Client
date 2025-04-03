"use client";
import React from "react";
import TransactionTableList from "@/components/transactions/TransactionTableList";

function TransactionPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="pb-2 ml-2 text-2xl text-gray-700 font-semibold mb-4">
        Transaction List
      </h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <TransactionTableList />
      </div>
    </div>
  );
}

export default TransactionPage;
