import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ProductDetailsView } from './ProductDetailsView';
import { getProductDetails } from '../../store/reducers/ProductDetailsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/redux';

export const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const trimmedPath = path.substring(path.lastIndexOf('/') + 1);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductDetails(trimmedPath));
  }, [trimmedPath, dispatch]);

  const { product, error, isLoading } = useAppSelector(state => {
    return state.productDetailsReducer;
  });

  const { products } = useAppSelector(state => {
    return state.productsReducer;
  });

  const changeColor = useCallback((currentColor: string, newColor: string) => {
    navigate(path.replace(currentColor, newColor));
  }, [navigate, path]);

  const changeCapacity = useCallback((currentCap: string, newCap: string) => {
    navigate(path.replace(
      currentCap.toLocaleLowerCase(),
      newCap.toLocaleLowerCase(),
    ));
  }, [navigate, path]);

  if (isLoading) {
    return <p>LOADING</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    product && (
      <ProductDetailsView
        product={product}
        onColorChange={changeColor}
        onCapacityChange={changeCapacity}
        randomProducts={products}
      />
    )

  );
};
