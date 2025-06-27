import React, { useState } from 'react';
import { cn } from "@/lib/utils";

// Layout Components from Custom Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Shadcn UI Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Icons
import { MoreHorizontal, PlusCircle } from "lucide-react";

// Placeholder data for the product list
const products = [
  {
    id: "prod_1",
    name: "Acoustic Guitar",
    sku: "AG-101-BLK",
    price: 299.99,
    stock: 25,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=400&h=400&fit=crop",
  },
  {
    id: "prod_2",
    name: "Electric Keyboard",
    sku: "EK-202-WHT",
    price: 450.0,
    stock: 10,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1612024519330-8007a4a28f32?w=400&h=400&fit=crop",
  },
  {
    id: "prod_3",
    name: "Studio Headphones",
    sku: "SH-303-RED",
    price: 149.5,
    stock: 5,
    status: "Low Stock",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: "prod_4",
    name: "Professional Microphone",
    sku: "PM-404-GRY",
    price: 199.99,
    stock: 0,
    status: "Out of Stock",
    imageUrl: "https://images.unsplash.com/photo-1590602843295-3679695ca8a3?w=400&h=400&fit=crop",
  },
  {
    id: "prod_5",
    name: "Vintage Vinyl Player",
    sku: "VVP-505-BRN",
    price: 220.0,
    stock: 15,
    status: "In Stock",
    imageUrl: "https://images.unsplash.com/photo-1533471213568-7b95f171051a?w=400&h=400&fit=crop",
  },
];

const ProductsList = () => {
    console.log('ProductsList page loaded');
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(prevState => !prevState);
    };
    
    // Helper to determine badge color based on stock status
    const getBadgeVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
        switch (status) {
            case "In Stock":
                return "default";
            case "Low Stock":
                return "secondary";
            case "Out of Stock":
                return "destructive";
            default:
                return "outline";
        }
    };

    return (
        <div className="grid min-h-screen w-full md:grid-cols-[auto_1fr]">
            <LeftSidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <div className="flex flex-col">
                <Header toggleSidebar={toggleSidebar} />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                           <div>
                             <CardTitle>Products</CardTitle>
                             <CardDescription>
                                Manage your products and view their inventory.
                             </CardDescription>
                           </div>
                           <Button size="sm" className="gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add Product
                                </span>
                            </Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="hidden w-[80px] sm:table-cell">
                                            <span className="sr-only">Image</span>
                                        </TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead className="hidden md:table-cell">Price</TableHead>
                                        <TableHead className="hidden md:table-cell">Stock</TableHead>
                                        <TableHead>
                                            <span className="sr-only">Actions</span>
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {products.map((product) => (
                                        <TableRow key={product.id}>
                                            <TableCell className="hidden sm:table-cell">
                                                <Avatar className="rounded-md h-12 w-12">
                                                    <AvatarImage src={product.imageUrl} alt={product.name} className="object-cover" />
                                                    <AvatarFallback>{product.name.substring(0,2)}</AvatarFallback>
                                                </Avatar>
                                            </TableCell>
                                            <TableCell className="font-medium">{product.name}</TableCell>
                                            <TableCell>
                                                <Badge variant={getBadgeVariant(product.status)}>{product.status}</Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">${product.price.toFixed(2)}</TableCell>
                                            <TableCell className="hidden md:table-cell">{product.stock}</TableCell>
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
                                                        <DropdownMenuItem>Edit</DropdownMenuItem>
                                                        <DropdownMenuItem>Delete</DropdownMenuItem>
                                                    </DropdownMenuContent>
                                                </DropdownMenu>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                            <div className="text-xs text-muted-foreground">
                                Showing <strong>1-{products.length}</strong> of <strong>{products.length}</strong> products
                            </div>
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#" isActive>1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationEllipsis />
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationNext href="#" />
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </CardFooter>
                    </Card>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ProductsList;