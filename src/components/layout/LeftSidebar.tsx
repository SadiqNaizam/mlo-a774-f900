import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  LineChart,
  ChevronLeft,
  PanelsTopLeft,
} from 'lucide-react';

interface LeftSidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const navItems = [
  { href: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { href: '/orders-management', icon: ShoppingCart, label: 'Orders' },
  { href: '/products-list', icon: Package, label: 'Products' },
  { href: '/customer-database', icon: Users, label: 'Customers' },
  { href: '/analytics-reports', icon: LineChart, label: 'Analytics' },
];

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  console.log('LeftSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
      { 'bg-muted text-primary': isActive }
    );

  return (
    <aside
      className={cn(
        'hidden border-r bg-muted/40 md:flex md:flex-col transition-[width] duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="flex h-16 items-center border-b px-4 lg:h-[68px] lg:px-6 relative">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <PanelsTopLeft className="h-6 w-6 text-primary" />
          {!isCollapsed && <span className="">CommerceView</span>}
        </NavLink>
        <Button
            variant="ghost"
            size="icon"
            className={cn(
                "absolute rounded-full h-7 w-7 right-0 translate-x-1/2 top-1/2 -translate-y-1/2 border bg-background hover:bg-muted z-10",
                { "rotate-180": isCollapsed }
            )}
            onClick={toggleSidebar}
        >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Toggle sidebar</span>
        </Button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4 gap-1">
          {navItems.map(({ href, icon: Icon, label }) =>
            isCollapsed ? (
              <Tooltip key={href}>
                <TooltipTrigger asChild>
                  <NavLink
                    to={href}
                    end={href === '/'}
                    className={({ isActive }) => cn(navLinkClasses({isActive}), 'justify-center')}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{label}</span>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            ) : (
              <NavLink key={href} to={href} end={href === '/'} className={navLinkClasses}>
                <Icon className="h-5 w-5" />
                {label}
              </NavLink>
            )
          )}
        </nav>
      </div>
    </aside>
  );
};

export default LeftSidebar;