import { IGems } from './IGems';
import { IShape } from './IShape';
import { ICertificate } from './ICertificate';

export interface IStone{
	id:number;
  vsku: string;
  name: IGems;
	
	osku:number;// OLD Price
	op:string;// Our Price
	sp:string;// Sale Price
	img_conf:string;//Image Config
	is_img:number;
  is_vid: number;
  shp: IShape;
	dim:string;// Dimension
	wt:number;// Weight
	ci:string;//Color Intensity
	
	clr:string;//Color 
	eye_cla:string;//Eye Clarity
	trns:string;//Transparency
	origin:string;
  enh: string;//Enhancement
  cert: ICertificate[];
	
}
