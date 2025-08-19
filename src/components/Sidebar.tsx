import React from 'react';
import {
	Sheet,
	SheetTrigger,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from './ui/sheet';
import { Button } from './ui/button';
import Link from 'next/link';
import {
	Home,
	LogOutIcon,
	Package,
	PanelBottom,
	Settings,
	ShoppingBag,
	Users,
} from 'lucide-react';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@radix-ui/react-tooltip';

const Sidebar = () => {
	return (
		<div className="flex w-full flex-col bg-muted/40">
			<aside className="fixed inset-y-0 left-0 w-14 z-10 hidden border-r bg-background sm:flex flex-col">
				<nav className="flex flex-col items-center gap-4 px-2 py-5">
					<TooltipProvider>
						<Link
							href="#"
							className="flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full"
						>
							<Package className="w-4 h-4" />
							<span className="sr-only">Dashboard Avatar</span>
						</Link>

						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
								>
									<Home className="w-5 h-5" />
									<span className="sr-only">Home</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Início</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
								>
									<ShoppingBag className="w-5 h-5" />
									<span className="sr-only">Pedidos</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Pedidos
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
								>
									<Package className="w-5 h-5" />
									<span className="sr-only">Produtos</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Produtos
							</TooltipContent>
						</Tooltip>

						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
								>
									<Users className="w-5 h-5" />
									<span className="sr-only">Clientes</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Clientes
							</TooltipContent>
						</Tooltip>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
								>
									<Settings className="w-5 h-5" />
									<span className="sr-only">
										Configurações
									</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">
								Configurações
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>

				<nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Link
									href="#"
									className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground"
								>
									<LogOutIcon className="w-5 h-5 text-red-800" />
									<span className="sr-only">Sair</span>
								</Link>
							</TooltipTrigger>
							<TooltipContent side="right">Sair</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</nav>
			</aside>

			<div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
				<header className="sticky top=0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								size={'icon'}
								variant={'outline'}
								className="sm:hidden"
							>
								<PanelBottom className="w-5 h-5" />
								<span className="sr-only">
									Abrir ou fechar menu
								</span>
							</Button>
						</SheetTrigger>

						<SheetHeader className="flex justify-end">
							<SheetTitle>Menu</SheetTitle>
						</SheetHeader>

						<SheetContent side="left" className="sm:max-w-xs p-5">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="#"
									className="flex h-10 w-10 bg-primary rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
									prefetch={false}
								>
									<Package className="w-5 h-5 transition-all" />
									<span className="sr-only">Logo</span>
								</Link>

								<Link
									href="#"
									className="flex items-center gap-3 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<Home className="w-5 h-5 transition-all" />
									<span>Início</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-3 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<ShoppingBag className="w-5 h-5 transition-all" />
									<span>Pedidos</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-3 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<Package className="w-5 h-5 transition-all" />
									<span>Produtos</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-3 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<Users className="w-5 h-5 transition-all" />
									<span>Clientes</span>
								</Link>
								<Link
									href="#"
									className="flex items-center gap-3 px-2.5 text-muted-foreground hover:text-foreground"
									prefetch={false}
								>
									<Settings className="w-5 h-5 transition-all" />
									<span>Configurações</span>
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
				</header>
			</div>
		</div>
	);
};

export default Sidebar;
