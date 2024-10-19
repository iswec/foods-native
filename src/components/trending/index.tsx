import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { CardHorizontalFood } from './food';

export interface FoodProps{
    id: string;
    name: string;
    price: number;
    time: string;
    delivery: number;
    rating: number;
    image: string;
    restaurantId: string;
  }

export function TrendingFoods() {
    const [food, setFood] = useState<FoodProps[]>([])

    useEffect(() => {
        async function getFoods() {
            const response = await fetch("http://192.168.0.5:3000/foods")
            const data = await response.json()
            setFood(data)
        }
        getFoods()
    },[])

 return (
   <FlatList
    data={food}
    renderItem={({ item }) => <CardHorizontalFood food={item} />}
    horizontal={true}
    contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16}}
    showsHorizontalScrollIndicator={false}
   />
  );
}