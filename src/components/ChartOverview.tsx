'use client';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from './ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

const ChartOverview = () => {
	const chartData = [
		{ month: 'Janeiro', site: 120, marketplace: 80 },
		{ month: 'Fevereiro', site: 200, marketplace: 150 },
		{ month: 'Março', site: 180, marketplace: 130 },
		{ month: 'Abril', site: 90, marketplace: 110 },
		{ month: 'Maio', site: 250, marketplace: 170 },
		{ month: 'Junho', site: 300, marketplace: 210 },
	];

	const chartConfig = {
		site: {
			label: 'Site Próprio',
			color: '#2563eb', // azul
		},
		marketplace: {
			label: 'Marketplace',
			color: '#60a5fa', // azul claro
		},
	} satisfies ChartConfig;

	return (
		<Card className="w-full md:max-w-[1000px]">
			<CardHeader>
				<div className="flex items-center justify-center">
					<CardTitle className="text-lg sm:text-xl text-gray-800">
						Overview de Vendas
					</CardTitle>
					<ShoppingCart className="ml-auto w-5 h-5 text-blue-600" />
				</div>
			</CardHeader>

			<CardContent>
				<ChartContainer
					config={chartConfig}
					className="min-h-[200px] w-full"
				>
					<BarChart data={chartData}>
						<CartesianGrid vertical={true} />
						<ChartTooltip content={<ChartTooltipContent />} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<Bar
							dataKey="site"
							fill="var(--color-site)"
							radius={4}
						/>
						<Bar
							dataKey="marketplace"
							fill="var(--color-marketplace)"
							radius={4}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};

export default ChartOverview;
