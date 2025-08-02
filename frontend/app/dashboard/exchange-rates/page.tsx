import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  RefreshCw,
  Star,
  ArrowUpDown,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const exchangeRates = [
  {
    from: "USD",
    to: "EUR",
    rate: 0.8456,
    change: -0.0023,
    changePercent: -0.27,
    lastUpdated: "2024-01-15 14:30:00",
  },
  {
    from: "USD",
    to: "GBP",
    rate: 0.7892,
    change: +0.0045,
    changePercent: +0.57,
    lastUpdated: "2024-01-15 14:30:00",
  },
  {
    from: "USD",
    to: "JPY",
    rate: 149.25,
    change: -1.15,
    changePercent: -0.76,
    lastUpdated: "2024-01-15 14:30:00",
  },
  {
    from: "USD",
    to: "CAD",
    rate: 1.3456,
    change: +0.0089,
    changePercent: +0.66,
    lastUpdated: "2024-01-15 14:30:00",
  },
  {
    from: "EUR",
    to: "GBP",
    rate: 0.9334,
    change: +0.0067,
    changePercent: +0.72,
    lastUpdated: "2024-01-15 14:30:00",
  },
  {
    from: "EUR",
    to: "JPY",
    rate: 176.45,
    change: -0.89,
    changePercent: -0.5,
    lastUpdated: "2024-01-15 14:30:00",
  },
];

const popularPairs = [
  { from: "USD", to: "EUR", favorite: true },
  { from: "USD", to: "GBP", favorite: true },
  { from: "EUR", to: "GBP", favorite: false },
  { from: "USD", to: "JPY", favorite: false },
];

export default function ExchangeRatesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Exchange Rates</h1>
          <p className="text-gray-600">
            Real-time and historical currency exchange rates
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Rates
          </Button>
          <Button size="sm">
            <Star className="mr-2 h-4 w-4" />
            Add to Favorites
          </Button>
        </div>
      </div>

      {/* Currency Converter */}
      <Card>
        <CardHeader>
          <CardTitle>Currency Converter</CardTitle>
          <CardDescription>
            Convert between different currencies using live rates
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            <div className="space-y-2">
              <label className="text-sm font-medium">Amount</label>
              <input
                type="number"
                placeholder="1000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">From</label>
              <Select defaultValue="usd">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD - US Dollar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound</SelectItem>
                  <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                  <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="h-10 w-10 p-0 bg-transparent"
              >
                <ArrowUpDown className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">To</label>
              <Select defaultValue="eur">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="usd">USD - US Dollar</SelectItem>
                  <SelectItem value="eur">EUR - Euro</SelectItem>
                  <SelectItem value="gbp">GBP - British Pound</SelectItem>
                  <SelectItem value="jpy">JPY - Japanese Yen</SelectItem>
                  <SelectItem value="cad">CAD - Canadian Dollar</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Convert</Button>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-2xl font-bold">845.60 EUR</div>
            <div className="text-sm text-gray-600">1 USD = 0.8456 EUR</div>
          </div>
        </CardContent>
      </Card>

      {/* Live Exchange Rates */}
      <Card>
        <CardHeader>
          <CardTitle>Live Exchange Rates</CardTitle>
          <CardDescription>
            Real-time currency exchange rates updated every minute
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exchangeRates.map((rate, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-lg">
                      {rate.from}/{rate.to}
                    </span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                      <Star className="h-3 w-3" />
                    </Button>
                  </div>
                  <Badge
                    className={
                      rate.change >= 0
                        ? "text-green-600 bg-green-50"
                        : "text-red-600 bg-red-50"
                    }
                  >
                    {rate.change >= 0 ? (
                      <TrendingUp className="mr-1 h-3 w-3" />
                    ) : (
                      <TrendingDown className="mr-1 h-3 w-3" />
                    )}
                    {rate.changePercent >= 0 ? "+" : ""}
                    {rate.changePercent}%
                  </Badge>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">
                    {rate.rate.toFixed(4)}
                  </div>
                  <div
                    className={`text-sm flex items-center ${
                      rate.change >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {rate.change >= 0 ? "+" : ""}
                    {rate.change.toFixed(4)} today
                  </div>
                  <div className="text-xs text-gray-500">
                    Updated: {new Date(rate.lastUpdated).toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Market Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Market Summary</CardTitle>
            <CardDescription>Today's currency market overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <div className="font-semibold text-green-800">
                    Strongest Currency
                  </div>
                  <div className="text-sm text-green-600">GBP vs USD</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-green-800">+0.57%</div>
                  <div className="text-sm text-green-600">0.7892</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <div className="font-semibold text-red-800">
                    Weakest Currency
                  </div>
                  <div className="text-sm text-red-600">JPY vs USD</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-red-800">-0.76%</div>
                  <div className="text-sm text-red-600">149.25</div>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Most volatile:</span>
                    <span className="font-medium">EUR/JPY</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span>Least volatile:</span>
                    <span className="font-medium">USD/CAD</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rate Alerts</CardTitle>
            <CardDescription>
              Set up notifications for rate changes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">USD/EUR Alert</div>
                    <div className="text-sm text-gray-600">
                      Notify when rate drops below 0.8400
                    </div>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>

              <div className="p-3 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">GBP/USD Alert</div>
                    <div className="text-sm text-gray-600">
                      Notify when rate rises above 0.8000
                    </div>
                  </div>
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>

              <Button variant="outline" className="w-full bg-transparent">
                Create New Alert
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
