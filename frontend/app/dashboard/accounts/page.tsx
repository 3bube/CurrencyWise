import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Plus,
  DollarSign,
  Euro,
  PoundSterling,
  TrendingUp,
  TrendingDown,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const accounts = [
  {
    id: 1,
    name: "Primary Checking",
    type: "Checking",
    balance: 2450.75,
    currency: "USD",
    icon: DollarSign,
    change: +125.5,
    changePercent: +5.4,
    lastTransaction: "2024-01-15",
  },
  {
    id: 2,
    name: "High-Yield Savings",
    type: "Savings",
    balance: 8900.0,
    currency: "USD",
    icon: DollarSign,
    change: +89.0,
    changePercent: +1.0,
    lastTransaction: "2024-01-14",
  },
  {
    id: 3,
    name: "European Account",
    type: "Checking",
    balance: 1200.5,
    currency: "EUR",
    icon: Euro,
    change: -45.25,
    changePercent: -3.6,
    lastTransaction: "2024-01-13",
  },
  {
    id: 4,
    name: "UK Business Account",
    type: "Business",
    balance: 750.25,
    currency: "GBP",
    icon: PoundSterling,
    change: +32.1,
    changePercent: +4.5,
    lastTransaction: "2024-01-12",
  },
  {
    id: 5,
    name: "Investment Account",
    type: "Investment",
    balance: 15420.8,
    currency: "USD",
    icon: DollarSign,
    change: +234.5,
    changePercent: +1.5,
    lastTransaction: "2024-01-15",
  },
];

export default function AccountsPage() {
  const totalBalance = accounts.reduce((sum, account) => {
    const rate =
      account.currency === "EUR" ? 1.1 : account.currency === "GBP" ? 1.25 : 1;
    return sum + account.balance * rate;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Accounts</h1>
          <p className="text-gray-600">
            Manage your financial accounts across different currencies
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Account
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Balance (USD)
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalBalance.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              Across {accounts.length} accounts
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Active Accounts
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{accounts.length}</div>
            <p className="text-xs text-muted-foreground">
              3 currencies supported
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Monthly Growth
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">+2.8%</div>
            <p className="text-xs text-muted-foreground">+$435.85 this month</p>
          </CardContent>
        </Card>
      </div>

      {/* Accounts List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {accounts.map((account) => (
          <Card key={account.id} className="relative">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                  <account.icon className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <CardTitle className="text-lg">{account.name}</CardTitle>
                  <CardDescription>{account.type} Account</CardDescription>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Edit Account</DropdownMenuItem>
                  <DropdownMenuItem>Export Data</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">
                    Delete Account
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold">
                    {account.currency === "USD"
                      ? "$"
                      : account.currency === "EUR"
                      ? "€"
                      : "£"}
                    {account.balance.toLocaleString()}
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <span
                      className={`flex items-center ${
                        account.change >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {account.change >= 0 ? (
                        <TrendingUp className="mr-1 h-3 w-3" />
                      ) : (
                        <TrendingDown className="mr-1 h-3 w-3" />
                      )}
                      {account.change >= 0 ? "+" : ""}
                      {account.currency === "USD"
                        ? "$"
                        : account.currency === "EUR"
                        ? "€"
                        : "£"}
                      {Math.abs(account.change).toFixed(2)}
                    </span>
                    <span className="text-gray-500">
                      ({account.changePercent >= 0 ? "+" : ""}
                      {account.changePercent}%)
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Last transaction</span>
                  <span>{account.lastTransaction}</span>
                </div>

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-transparent"
                  >
                    View Transactions
                  </Button>
                  <Button size="sm" className="flex-1">
                    Add Transaction
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
