import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ShoppingCart, PackageWarning, DollarSign, Users } from "lucide-react";

console.log('RecentActivityFeed loaded');

type Activity = {
  id: number;
  type: 'order' | 'stock' | 'payment' | 'customer';
  description: string;
  time: string;
};

const mockActivities: Activity[] = [
  {
    id: 1,
    type: 'order',
    description: "New order #1052 was placed.",
    time: "5 minutes ago",
  },
  {
    id: 2,
    type: 'stock',
    description: "Product 'Monstera Deliciosa' is low on stock.",
    time: "20 minutes ago",
  },
  {
    id: 3,
    type: 'payment',
    description: "Payment of $128.50 received from Jane Doe.",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: 'customer',
    description: "New customer 'John Smith' registered.",
    time: "3 hours ago",
  },
  {
    id: 5,
    type: 'order',
    description: "New order #1051 was placed.",
    time: "5 hours ago",
  },
];

const activityIcons: { [key in Activity['type']]: React.ReactNode } = {
  order: <ShoppingCart className="h-5 w-5" />,
  stock: <PackageWarning className="h-5 w-5" />,
  payment: <DollarSign className="h-5 w-5" />,
  customer: <Users className="h-5 w-5" />,
};

const RecentActivityFeed = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {mockActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 flex-shrink-0">
                <AvatarFallback className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  {activityIcons[activity.type]}
                </AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="text-sm font-medium leading-none">{activity.description}</p>
                <p className="text-sm text-muted-foreground pt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityFeed;