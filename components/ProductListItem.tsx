import React from "react";
import { Text } from "react-native";

const ProductListItem = ({ product }) => {
	return <Text style={{ fontSize: 30 }}>{product.name}</Text>;
};

export default ProductListItem;
