from django.urls import path
#Level 2
#from api.views.fbv import product_list, product_detail
#Level 3
# from api.views.cbv import ProductListAPIView, ProductDetailAPIView
#Level 4
#from api.views.mixins import ProductListAPIView, ProductDetailAPIView, CategoryListAPIView
#Level 5
from api.views.generics import ProductListAPIView, ProductDetailAPIView, CategoryListAPIView, CategoryDetailAPIView, CategoryProductsAPIView


urlpatterns = [
    #LEVEL 2
    #path('products/', product_list),
    #path('products/<int:product_id>/', product_detail),

    #LEVEL 3,4,5
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),
]