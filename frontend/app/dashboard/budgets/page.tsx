import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const budgets = [
  {
    id: 1,
    category: "Food & Dining",
    budgetAmount: 500,
    spentAmount: 425,
    currency: "USD",
    period: "Monthly",
    status: "on-track",
    daysLeft: 12,
  },
  {
    id: 2,
    category: "Transportation",
    budgetAmount: 300,
    spentAmount: 285,
    currency: "USD",
    period: "Monthly",
    status: "warning",
    daysLeft: 12,
  },
  {
    id: 3,
    category: "Shopping",
    budgetAmount: 400,
    spentAmount: 520,
    currency: "USD",
    period: "Monthly",
    status: "over-budget",
    daysLeft: 12,
  },
  {
    id: 4,
    category: "Entertainment",
    budgetAmount: 200,
    spentAmount: 145,
    currency: "USD",
    period: "Monthly",
    status: "on-track",
    daysLeft: 12,
  },
  {
    id: 5,
    category: "Utilities",
    budgetAmount: 250,
    spentAmount: 230,
    currency: "USD",
    period: "Monthly",
    status: "on-track",
    daysLeft: 12,
  },
  {
    id: 6,
    category: "Healthcare",
    budgetAmount: 150,
    spentAmount: 85,
    currency: "USD",
    period: "Monthly",
    status: "under-budget",
    daysLeft: 12,
  },
];

export default function BudgetsPage() {
  const totalBudget = budgets.reduce(
    (sum, budget) => sum + budget.budgetAmount,
    0
  );
  const totalSpent = budgets.reduce(
    (sum, budget) => sum + budget.spentAmount,
    0
  );
  const overBudgetCount = budgets.filter(
    (b) => b.status === "over-budget"
  ).length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "on-track":
        return "text-green-600 bg-green-50";
      case "warning":
        return "text-yellow-600 bg-yellow-50";
      case "over-budget":
        return "text-red-600 bg-red-50";
      case "under-budget":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "on-track":
        return <CheckCircle className="h-4 w-4" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4" />;
      case "over-budget":
        return <AlertTriangle className="h-4 w-4" />;
      case "under-budget":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Budgets</h1>
          <p className="text-gray-600">
            Track your spending against monthly budget limits
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Budget
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalBudget.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">This month's limit</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalSpent.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {((totalSpent / totalBudget) * 100).toFixed(1)}% of budget
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              ${(totalBudget - totalSpent).toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              12 days left this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Over Budget</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {overBudgetCount}
            </div>
            <p className="text-xs text-muted-foreground">
              {overBudgetCount === 1 ? "category" : "categories"}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Budget Overview</CardTitle>
          <CardDescription>
            Your spending progress across all categories
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span>Overall Progress</span>
              <span>{((totalSpent / totalBudget) * 100).toFixed(1)}%</span>
            </div>
            <Progress
              value={(totalSpent / totalBudget) * 100}
              className="h-3"
            />
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>${totalSpent.toLocaleString()} spent</span>
              <span>${totalBudget.toLocaleString()} budget</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Budget Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {budgets.map((budget) => {
          const percentage = (budget.spentAmount / budget.budgetAmount) * 100;
          const remaining = budget.budgetAmount - budget.spentAmount;

          return (
            <Card key={budget.id}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle className="text-lg">{budget.category}</CardTitle>
                  <CardDescription>{budget.period} Budget</CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(budget.status)}>
                    {getStatusIcon(budget.status)}
                    <span className="ml-1 capitalize">
                      {budget.status.replace("-", " ")}
                    </span>
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Budget</DropdownMenuItem>
                      <DropdownMenuItem>View Transactions</DropdownMenuItem>
                      <DropdownMenuItem>Set Alert</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete Budget
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      ${budget.spentAmount.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">
                      of ${budget.budgetAmount.toLocaleString()}
                    </span>
                  </div>

                  <Progress
                    value={Math.min(percentage, 100)}
                    className={`h-2 ${
                      percentage > 100 ? "[&>div]:bg-red-500" : ""
                    }`}
                  />

                  <div className="flex items-center justify-between text-sm">
                    <span
                      className={
                        remaining >= 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      {remaining >= 0
                        ? `$${remaining.toLocaleString()} remaining`
                        : `$${Math.abs(
                            remaining
                          ).toLocaleString()} over budget`}
                    </span>
                    <span className="text-gray-500">
                      {budget.daysLeft} days left
                    </span>
                  </div>

                  <div className="text-xs text-gray-500">
                    {percentage.toFixed(1)}% of budget used
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
