import React from 'react';
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet';
import { Button } from './ui/button';
import Link from 'next/link';

const Sidebar = () => {
	return (
		<div className="flex w-full flex-col bg-muted/40">
			<div className="flex flex-col ">
				<header>
					<Sheet>
						<SheetTrigger asChild>
							<Button>
								<span>Abrir</span>
							</Button>
						</SheetTrigger>

						<SheetContent>
							<nav>
								<Link href="#">
									<span>Logo</span>
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
