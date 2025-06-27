import React, { useState } from 'react';
import { File, ListFilter, MoreHorizontal, Search } from 'lucide-react';

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

// Mock data for the orders table
const orders = [
  {
    id: 'ORD001',
    customer: 'Liam Johnson',
    email: 'liam@example.com',
    date: '2023-07-15',
    status: 'Shipped',
    total: '$250.00',
  },
  {
    id: 'ORD002',
    customer: 'Olivia Smith',
    email: 'olivia@example.com',
    date: '2023-07-16',
    status: 'Shipped',
    total: '$150.00',
  },
  {
    id: 'ORD003',
    customer: 'Noah Williams',
    email: 'noah@example.com',
    date: '2023-07-17',
    status: 'Pending',
    total: '$350.00',
  },
  {
    id: 'ORD004',
    customer: 'Emma Brown',
    email: 'emma@example.com',
    date: '2023-07-18',
    status: 'Shipped',
    total: '$450.00',
  },
  {
    id: 'ORD005',
    customer: 'Ava Jones',
    email: 'ava@example.com',
    date: '2023-07-19',
    status: 'Cancelled',
    total: '$550.00',
  },
  {
    id: 'ORD006',
    customer: 'Lucas Garcia',
    email: 'lucas@example.com',
    date: '2023-07-20',
    status: 'Pending',
    total: '$50.00',
  },
  {
    id: 'ORD007',
    customer: 'Sophia Miller',
    email: 'sophia@example.com',
    date: '2023-07-21',
    status: 'Shipped',
    total: '$95.50',
  },
];

const OrdersManagement = () => {
  console.log('OrdersManagement loaded');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };
  
  const getBadgeVariant = (status: string) => {
    switch (status) {
      case 'Shipped':
        return 'default';
      case 'Pending':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  // In a real app, you would filter this data based on the active tab
  const renderTableRows = (filteredOrders: typeof orders) => {
    return filteredOrders.map((order) => (
      <TableRow key={order.id}>
        <TableCell className="font-medium">{order.id}</TableCell>
        <TableCell>{order.customer}</TableCell>
        <TableCell className="hidden md:table-cell">{order.email}</TableCell>
        <TableCell className="hidden md:table-cell">
          <Badge variant={getBadgeVariant(order.status) as any}>{order.status}</Badge>
        </TableCell>
        <TableCell className="hidden md:table-cell">{order.date}</TableCell>
        <TableCell className="text-right">{order.total}</TableCell>
        <TableCell>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button aria-haspopup="true" size="icon" variant="ghost">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem>View Details</DropdownMenuItem>
              <DropdownMenuItem>Mark as Shipped</DropdownMenuItem>
              <DropdownMenuItem className="text-red-600">Cancel</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ));
  }

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <LeftSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
      <div className="flex flex-col flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="shipped">Shipped</TabsTrigger>
                <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuItem>Date</DropdownMenuItem>
                    <DropdownMenuItem>Customer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                </Button>
              </div>
            </div>
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Orders</CardTitle>
                <CardDescription>
                  An overview of all customer orders in your store.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead className="hidden md:table-cell">Email</TableHead>
                      <TableHead className="hidden md:table-cell">Status</TableHead>
                      <TableHead className="hidden md:table-cell">Date</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead><span className="sr-only">Actions</span></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* Each TabsContent would have its own filtered data in a real app */}
                    <TabsContent value="all" asChild><tbody>{renderTableRows(orders)}</tbody></TabsContent>
                    <TabsContent value="pending" asChild><tbody>{renderTableRows(orders.filter(o => o.status === 'Pending'))}</tbody></TabsContent>
                    <TabsContent value="shipped" asChild><tbody>{renderTableRows(orders.filter(o => o.status === 'Shipped'))}</tbody></TabsContent>
                    <TabsContent value="cancelled" asChild><tbody>{renderTableRows(orders.filter(o => o.status === 'Cancelled'))}</tbody></TabsContent>
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <div className="text-xs text-muted-foreground">
                  Showing <strong>1-7</strong> of <strong>7</strong> orders
                </div>
                <Pagination className="ml-auto">
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </CardFooter>
            </Card>
          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OrdersManagement;