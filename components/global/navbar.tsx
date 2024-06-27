'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { useSelectedLayoutSegment } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './theme-switch';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';

const components = [
  {
    title: 'UTM Builder',
    href: '/tools/utm-builder',
    description:
      'Start building your UTMs for Google Ads, Facebook Ads, TikTok, or custom, all at one place',
  },
  {
    title: 'Wheel Of Life',
    href: '/tools/wheel-of-life',
    description:
      'It allows individuals to divide their life into key areas and rate their level of satisfaction',
  },
  {
    title: 'Youtube Replica',
    href: '/tools/youtube-replica',
    description: 'A simple tool to test the Thumbnails for Youtube',
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}>
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

export default function Navbar() {
  const segment = useSelectedLayoutSegment();

  const isActive = (path: string) => {
    return segment === path;
  };

  const renderCallToAction = () => {
    if (segment === 'for-freelancers') {
      return (
        <Link passHref legacyBehavior href='/for-freelancers/enroll-now'>
          <Button className='w-full font-medium text-secondary sm:w-max'>
            Enroll Now
          </Button>
        </Link>
      );
    }
    return (
      <Link passHref legacyBehavior href='/contact'>
        <Button className='w-full font-medium text-secondary sm:w-max px-2 sm:px-4'>
          <span className='sm:block hidden'>Book a Call</span>
          <span className='block sm:hidden'>Contact</span>
        </Button>
      </Link>
    );
  };

  return (
    <div className='pt-4 pb-2 sticky top-0 z-10 w-full lg:text-sm'>
      <Container>
        <div className='bg-secondary rounded-lg '>
          <NavigationMenu className='h-14 px-3'>
            <NavigationMenuList className='hidden flex-col gap-4 text-lg font-medium lg:flex lg:flex-row lg:items-center lg:gap-2 lg:text-sm'>
              <NavigationMenuItem>
                <Link href='/' legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      !segment &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    TrackingAcademy.com
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/' legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('for-businesses') &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    For Businesses
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/for-freelancers' legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('for-freelancers') &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    For Freelancers
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href='/blog' legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('blog') &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    Blogs
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='grid w-[400px] gap-3 p-4 lg:w-[500px] lg:grid-cols-2'>
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant='outline'
                  size='icon'
                  className='shrink-0 lg:hidden'>
                  <Menu className='h-5 w-5' />
                  <span className='sr-only'>Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <div className='lg:hidden pl-2'>
                <Link href='/' legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      !segment &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    TrackingAcademy.com
                  </NavigationMenuLink>
                </Link>
              </div>

              <SheetContent
                side='right'
                className='flex flex-col justify-between'>
                <nav className='flex flex-col space-y-4 py-4 w-full'>
                  <Link
                    href='/'
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('for-businesses') &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    TrackingAcademy.com
                  </Link>
                  <Link
                    href='/'
                    className={cn(
                      navigationMenuTriggerStyle(),
                      !segment &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    For Businesses
                  </Link>
                  <Link
                    href='/for-freelancers'
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('for-freelancers') &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    For Freelancers
                  </Link>
                  <Link
                    href='/blog'
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('blog') &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    Blogs
                  </Link>
                  <Link
                    href='/tools'
                    className={cn(
                      navigationMenuTriggerStyle(),
                      isActive('tools') &&
                        'bg-secondary text-accent-foreground border border-primary'
                    )}>
                    Tools
                  </Link>

                  {segment === 'for-freelancers' ? (
                    <Link
                      passHref
                      legacyBehavior
                      href='/for-freelancers/enroll-now'>
                      <Button className='min-w-full font-medium text-secondary'>
                        Enroll Now
                      </Button>
                    </Link>
                  ) : (
                    <Link
                      passHref
                      legacyBehavior
                      href='/contact'
                      className='w-full'>
                      <Button className='w-full font-medium text-secondary'>
                        <span>Book a Call</span>
                      </Button>
                    </Link>
                  )}
                </nav>
                <ModeToggle />
              </SheetContent>
              <div className='flex w-full items-center justify-end gap-2'>
                <ModeToggle className='hidden lg:block' />
                {renderCallToAction()}
              </div>
            </Sheet>
          </NavigationMenu>
        </div>
      </Container>
    </div>
  );
}
