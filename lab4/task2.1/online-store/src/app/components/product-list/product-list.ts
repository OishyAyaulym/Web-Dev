import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Чехол JASPER для Apple iPhone 17 Pro прозрачный',
      description: 'Силиконовый прозрачный чехол на Айфон 17 \nПро с защитой камеры - это идеальное решение для тех, кто хочет сохранить свой телефон в безопасности, но при этом не желает скрывать его стильные линии.\nЭтот чехол изготовлен из высококачественного силикона, который обеспечивает отличную защиту от падений и царапин. Прозрачность материала позволяет вам видеть все детали вашего телефона, включая камеру, которая является одной из самых мощных в мире.\nОсобое внимание стоит уделить функциональности чехла. Он оснащен специальной защитой камеры, которая предотвращает повреждение датчиков и камер. Это особенно важно для пользователей, которые часто используют свою камеру для создания потрясающих фотографий и видео.',
      price: 990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p93/67520454.jpeg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p9d/p93/67520454.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pca/p8c/67520456.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p60/p89/67520457.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/chehol-jasper-dlja-apple-iphone-17-pro-prozrachnyi-146498145/?c=750000000'
    },
    {
      id: 2,
      name: 'Попсокет 002 розовый',
      description: 'Попсокет 002 розовый',
      price: 49,
      rating: 3.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p04/p6b/47574722.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p94/p6a/47574726.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=750000000'
    },
    {
      id: 3,
      name: 'Кабель VARIUM USB 4 Type-C (M), 1 м, VTT03 белый',
      description: 'USB кабель Apple Type - C to Type - C VARIUM VTT03 предназначен для использования с новейшими моделями смартфонов наушников планшетов от компании Apple таких как: iPhone AirPods iPad. Кабель отлично подходит для зарядки. Скорость зарядки напрямую зависит от адаптера который используется. \nUSB кабел Apple Type - C to Type - C VARIUM VTT03 Apple компаниясыны е жаа смартфон лаап планшет лглермен мысалы: iPhone AirPods iPad - пен олдануа арналан. Кабель зарядтауа те олайлы. Зарядтау жылдамдыы олданылатын адаптерге ткелей байланысты.',
      price: 1999,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p33/58883993.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pc0/p33/58883993.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p87/p33/58883995.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p6b/p33/58883996.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000'
    },
    {
      id: 4,
      name:'Чехол для Apple iPhone 16 Pro серый',
      description: 'Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.',
      price: 395,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h62/87345803198494.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h08/h62/87345803198494.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h05/hb9/87345803329566.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h27/hfb/87345803526174.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-16-pro-seryi-124489389/?c=750000000'
    },
    {
      id: 5,
      name: 'Смартфон Poco X7 Pro 12 ГБ/512 ГБ черный',
      description: 'Poco X7 Pro — это мощный смартфон с передовыми технологиями и стильным дизайном, созданный для тех, кто ценит высокую производительность и яркий дисплей.',
      price: 249900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p05/p6a/67021874.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p05/p6a/67021874.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p4b/p26/19792403.jpeg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb5/p29/19792404.jpeg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/poco-x7-pro-12-gb-512-gb-chernyi-133345346/?c=750000000'
    },
    {
      id: 6,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb Dual eSim серебристый',
      description: 'Apple iPhone 17 Pro 256Gb Dual eSim — это воплощение инноваций и бескомпромиссного качества в мире смартфонов. Тройная камера и мощный процессор A19 Pro открывают безграничные возможности для творчества и развлечений.',
      price: 856301,
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p48/p01/74062769.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p48/p01/74062769.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p09/p04/74062773.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p41/p04/74062775.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-dual-esim-serebristyi-148425720/?c=750000000'
    },
    {
      id: 7,
      name: 'Смартфон Samsung Galaxy A16 6 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy A16 — это стильный и функциональный смартфон, который станет вашим надёжным помощником в повседневной жизни. Наслаждайтесь ярким 6.7-дюймовым Super AMOLED экраном с разрешением FHD+ и мощным 8-ядерным процессором Helio G99 для плавной работы и комфортного использования.',
      price: 123343,
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p60/p80/10325751.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p60/p80/10325751.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p99/p80/10325753.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pb5/p80/10325754.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-6-gb-128-gb-chernyi-10325751/?c=750000000'
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 16 128Gb зеленый',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
      price: 450000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h53/87295472402462.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h53/87295472402462.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he8/h8e/87295472467998.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he9/h25/87295472500766.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-zelenyi-123727574/?c=750000000'
    },
    {
      id: 9,
      name: 'Смартфон Samsung Galaxy A16 8 ГБ/256 ГБ серый',
      description: 'Представляем вам Samsung Galaxy A16 — смартфон, который сочетает в себе высокую производительность, современные технологии и стильный дизайн. С ним вы сможете наслаждаться яркими моментами жизни и оставаться на связи в любое время!',
      price: 169611,
      rating: 3.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe3/p08/10325160.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pe3/p08/10325160.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p54/p09/10325164.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p8c/p09/10325166.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a16-8-gb-256-gb-seryi-130609812/?c=750000000'
    },
    {
      id:10,
      name: 'Смартфон Apple iPhone 15 256Gb голубой',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      price: 479935,
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h93/86303746392094.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hab/h93/86303746392094.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he8/h21/83559332380702.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hce/h40/83559332446238.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-goluboi-113137931/?c=750000000'
    }
  ];
}