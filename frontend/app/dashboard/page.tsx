"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  TrendingUp,
  DollarSign,
  Euro,
  PoundSterling,
} from "lucide-react";
import { AddTransactionModal } from "@/components/modals/AddTransactionModal";

const recentTransactions = [
  {
    id: 1,
    description: "Grocery Store",
    amount: -85.5,
    currency: "USD",
    category: "Food & Dining",
    date: "2024-01-15",
    type: "expense",
  },
  {
    id: 2,
    description: "Salary Deposit",
    amount: 3500.0,
    currency: "USD",
    category: "Income",
    date: "2024-01-15",
    type: "income",
  },
  {
    id: 3,
    description: "Coffee Shop",
    amount: -4.5,
    currency: "USD",
    category: "Food & Dining",
    date: "2024-01-14",
    type: "expense",
  },
  {
    id: 4,
    description: "Gas Station",
    amount: -45.0,
    currency: "USD",
    category: "Transportation",
    date: "2024-01-14",
    type: "expense",
  },
];

const accounts = [
  {
    name: "Checking Account",
    balance: 2450.75,
    currency: "USD",
    icon: DollarSign,
  },
  {
    name: "Savings Account",
    balance: 8900.0,
    currency: "USD",
    icon: DollarSign,
  },
  { name: "EUR Account", balance: 1200.5, currency: "EUR", icon: Euro },
  {
    name: "GBP Account",
    balance: 750.25,
    currency: "GBP",
    icon: PoundSterling,
  },
];

const expenseCategories = [
  { name: "Food & Dining", amount: 450, percentage: 35, color: "bg-blue-500" },
  {
    name: "Transportation",
    amount: 280,
    percentage: 22,
    color: "bg-green-500",
  },
  { name: "Shopping", amount: 320, percentage: 25, color: "bg-purple-500" },
  { name: "Utilities", amount: 230, percentage: 18, color: "bg-orange-500" },
];

export default function Dashboard() {
  const [isAddTransactionOpen, setIsAddTransactionOpen] = useState(false);

  const totalBalance = accounts.reduce((sum, account) => {
    // Simple conversion to USD for demo purposes
    const rate =
      account.currency === "EUR" ? 1.1 : account.currency === "GBP" ? 1.25 : 1;
    return sum + account.balance * rate;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here's your financial overview.
          </p>
        </div>
        <Button onClick={() => setIsAddTransactionOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Transaction
        </Button>
      </div>

      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalBalance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2.5% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Income
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2% from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Expenses
            </CardTitle>
            <ArrowDownRight className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$1,280</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">+3.1% from last month</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">69.5%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+1.2% from last month</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest financial activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-3 rounded-lg border"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === "income"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {transaction.type === "income" ? (
                        <ArrowUpRight className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5 text-red-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{transaction.description}</p>
                      <p className="text-sm text-gray-500">
                        {transaction.category}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p
                      className={`font-semibold ${
                        transaction.type === "income"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {transaction.type === "income" ? "+" : ""}$
                      {Math.abs(transaction.amount).toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Account Balances */}
        <Card>
          <CardHeader>
            <CardTitle>Account Balances</CardTitle>
            <CardDescription>Your accounts overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {accounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <account.icon className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{account.name}</p>
                      <p className="text-xs text-gray-500">
                        {account.currency}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold">
                    {account.currency === "USD"
                      ? "$"
                      : account.currency === "EUR"
                      ? "€"
                      : "£"}
                    {account.balance.toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Expense Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Expense Breakdown</CardTitle>
          <CardDescription>
            Your spending by category this month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {expenseCategories.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{category.name}</span>
                  <span className="text-sm text-gray-500">
                    ${category.amount}
                  </span>
                </div>
                <Progress value={category.percentage} className="h-2" />
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{category.percentage}% of budget</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddTransactionModal
        open={isAddTransactionOpen}
        onOpenChange={setIsAddTransactionOpen}
      />
    </div>
  );
}
