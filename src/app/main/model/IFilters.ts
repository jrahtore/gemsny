import { IOptionFilter } from './IOptionFilter';
import { IStepFilter } from './IStepFilter';
import { IRangeFilter } from './IRangeFilter';

export interface IFilters{

  gem_type: IOptionFilter;
	filterType:string;
	shape:IOptionFilter;
	wt:IRangeFilter;
 
	typ:IOptionFilter// Single or pair
	price:IRangeFilter;
  t: string;///type r==range o==option s==step
  d: string;//To be Display or not
  opt: string;// Single checkbox or multiple checkbox
  img: number;//To be display image or not like shapes have images with checkboxes
  c: " shap_dropdwn"
  vals: any[];// all 

	shp:IOptionFilter;// Shape
	len:IRangeFilter;//length
	
	width:IRangeFilter;
	
	lwr:IRangeFilter;

  
	ci:IOptionFilter;//Color Intensity
	
	clr:IOptionFilter;// Color
  eye_cla: IStepFilter;
  trns: IStepFilter;
	origin:IOptionFilter;
	enh:IOptionFilter;
  cert: IOptionFilter;
  showHide: boolean;
	}







