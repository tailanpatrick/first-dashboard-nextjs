import { CircleDollarSign } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';

function Sales() {
	return (
		<Card className="w-full md:w-1/2 md:max-w-[600px]">
			<CardHeader>
				<div className="flex items-center justify-center">
					<CardTitle className="text-lg sm:text-xl text-gray-800">
						Ultimos clientes
					</CardTitle>
					<CircleDollarSign className="ml-auto w-5 h-5" />
				</div>
				<CardDescription>
					Novos clientes nas últimas 24 horas
				</CardDescription>
			</CardHeader>

			<CardContent>
				<article className="flex items-center gap-2 border-b py-2">
					<Avatar className="w-8 h-8">
						<AvatarImage
							className="w-8 h-8"
							src="https://avatars.githubusercontent.com/u/146599324?v=4"
						/>
						<AvatarFallback>TP</AvatarFallback>
					</Avatar>

					<div>
						<p className="text-sm sm:text-base font-semibold">
							Tailan Patrick
						</p>
						<span className="text-[12px] sm:text-sm text-gray-500">
							teste@teste.com
						</span>
					</div>
				</article>
				<article className="flex items-center gap-2 border-b py-2">
					<Avatar className="w-8 h-8">
						<AvatarImage
							className="w-8 h-8"
							src="https://avatars.githubusercontent.com/u/146599324?v=4"
						/>
						<AvatarFallback>TP</AvatarFallback>
					</Avatar>

					<div>
						<p className="text-sm sm:text-base font-semibold">
							Tailan Patrick
						</p>
						<span className="text-[12px] sm:text-sm text-gray-500">
							teste@teste.com
						</span>
					</div>
				</article>
				<article className="flex items-center gap-2 border-b py-2">
					<Avatar className="w-8 h-8">
						<AvatarImage
							className="w-8 h-8"
							src="https://avatars.githubusercontent.com/u/146599324?v=4"
						/>
						<AvatarFallback>TP</AvatarFallback>
					</Avatar>

					<div>
						<p className="text-sm sm:text-base font-semibold">
							Tailan Patrick
						</p>
						<span className="text-[12px] sm:text-sm text-gray-500">
							teste@teste.com
						</span>
					</div>
				</article>
			</CardContent>
		</Card>
	);
}

export default Sales;
