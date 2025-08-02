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
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  MoreHorizontal,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const goals = [
  {
    id: 1,
    title: "Emergency Fund",
    description: "Build 6 months of expenses as emergency fund",
    targetAmount: 15000,
    currentAmount: 8500,
    currency: "USD",
    deadline: "2024-12-31",
    category: "Savings",
    status: "on-track",
    monthlyTarget: 650,
  },
  {
    id: 2,
    title: "Vacation to Europe",
    description: "Save for 2-week European vacation",
    targetAmount: 5000,
    currentAmount: 3200,
    currency: "USD",
    deadline: "2024-06-15",
    category: "Travel",
    status: "behind",
    monthlyTarget: 450,
  },
  {
    id: 3,
    title: "New Car Down Payment",
    description: "Save 20% down payment for new car",
    targetAmount: 8000,
    currentAmount: 8000,
    currency: "USD",
    deadline: "2024-03-01",
    category: "Transportation",
    status: "completed",
    monthlyTarget: 800,
  },
  {
    id: 4,
    title: "Home Renovation",
    description: "Kitchen and bathroom renovation fund",
    targetAmount: 25000,
    currentAmount: 12500,
    currency: "USD",
    deadline: "2024-09-30",
    category: "Home",
    status: "on-track",
    monthlyTarget: 1250,
  },
  {
    id: 5,
    title: "Investment Portfolio",
    description: "Build diversified investment portfolio",
    targetAmount: 50000,
    currentAmount: 18750,
    currency: "USD",
    deadline: "2025-12-31",
    category: "Investment",
    status: "ahead",
    monthlyTarget: 1500,
  },
];

export default function GoalsPage() {
  const totalTargetAmount = goals.reduce(
    (sum, goal) => sum + goal.targetAmount,
    0
  );
  const totalCurrentAmount = goals.reduce(
    (sum, goal) => sum + goal.currentAmount,
    0
  );
  const completedGoals = goals.filter((g) => g.status === "completed").length;
  const activeGoals = goals.filter((g) => g.status !== "completed").length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-green-600 bg-green-50";
      case "on-track":
        return "text-blue-600 bg-blue-50";
      case "ahead":
        return "text-emerald-600 bg-emerald-50";
      case "behind":
        return "text-red-600 bg-red-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "on-track":
        return <Target className="h-4 w-4" />;
      case "ahead":
        return <TrendingUp className="h-4 w-4" />;
      case "behind":
        return <Clock className="h-4 w-4" />;
      default:
        return <Target className="h-4 w-4" />;
    }
  };

  const getDaysUntilDeadline = (deadline: string) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Financial Goals</h1>
          <p className="text-gray-600">
            Track your progress towards your financial objectives
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Goal
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Target</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalTargetAmount.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">Across all goals</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Saved</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${totalCurrentAmount.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground">
              {((totalCurrentAmount / totalTargetAmount) * 100).toFixed(1)}% of
              target
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Goals</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeGoals}</div>
            <p className="text-xs text-muted-foreground">In progress</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {completedGoals}
            </div>
            <p className="text-xs text-muted-foreground">Goals achieved</p>
          </CardContent>
        </Card>
      </div>

      {/* Goals List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const percentage = (goal.currentAmount / goal.targetAmount) * 100;
          const remaining = goal.targetAmount - goal.currentAmount;
          const daysLeft = getDaysUntilDeadline(goal.deadline);

          return (
            <Card
              key={goal.id}
              className={
                goal.status === "completed"
                  ? "border-green-200 bg-green-50/30"
                  : ""
              }
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div className="flex-1">
                  <CardTitle className="text-lg">{goal.title}</CardTitle>
                  <CardDescription className="mt-1">
                    {goal.description}
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(goal.status)}>
                    {getStatusIcon(goal.status)}
                    <span className="ml-1 capitalize">
                      {goal.status.replace("-", " ")}
                    </span>
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit Goal</DropdownMenuItem>
                      <DropdownMenuItem>Add Contribution</DropdownMenuItem>
                      <DropdownMenuItem>View History</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Delete Goal
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">
                      ${goal.currentAmount.toLocaleString()}
                    </span>
                    <span className="text-sm text-gray-500">
                      of ${goal.targetAmount.toLocaleString()}
                    </span>
                  </div>

                  <Progress
                    value={Math.min(percentage, 100)}
                    className={`h-3 ${
                      goal.status === "completed" ? "[&>div]:bg-green-500" : ""
                    }`}
                  />

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Remaining:</span>
                      <div className="font-semibold">
                        {remaining > 0
                          ? `$${remaining.toLocaleString()}`
                          : "Goal Achieved!"}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Deadline:</span>
                      <div className="font-semibold">
                        {daysLeft > 0
                          ? `${daysLeft} days left`
                          : goal.status === "completed"
                          ? "Completed"
                          : "Overdue"}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Monthly target: ${goal.monthlyTarget.toLocaleString()}
                    </span>
                    <span className="font-medium">
                      {percentage.toFixed(1)}% complete
                    </span>
                  </div>

                  {goal.status !== "completed" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                    >
                      Add Contribution
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
