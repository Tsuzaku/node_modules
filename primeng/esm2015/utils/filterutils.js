import { ObjectUtils } from './objectutils';
export class FilterUtils {
    static filter(value, fields, filterValue, filterMatchMode) {
        let filteredItems = [];
        let filterText = ObjectUtils.removeAccents(filterValue).toLowerCase();
        if (value) {
            for (let item of value) {
                for (let field of fields) {
                    let fieldValue = ObjectUtils.removeAccents(String(ObjectUtils.resolveFieldData(item, field))).toLowerCase();
                    if (FilterUtils[filterMatchMode](fieldValue, filterText)) {
                        filteredItems.push(item);
                        break;
                    }
                }
            }
        }
        return filteredItems;
    }
    static startsWith(value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();
        return stringValue.slice(0, filterValue.length) === filterValue;
    }
    static contains(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue) !== -1;
    }
    static endsWith(value, filter) {
        if (filter === undefined || filter === null || filter.trim() === '') {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        let filterValue = ObjectUtils.removeAccents(filter.toString()).toLowerCase();
        let stringValue = ObjectUtils.removeAccents(value.toString()).toLowerCase();
        return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }
    static equals(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() === filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLowerCase() == ObjectUtils.removeAccents(filter.toString()).toLowerCase();
    }
    static notEquals(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return false;
        }
        if (value === undefined || value === null) {
            return true;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() !== filter.getTime();
        else
            return ObjectUtils.removeAccents(value.toString()).toLowerCase() != ObjectUtils.removeAccents(filter.toString()).toLowerCase();
    }
    static in(value, filter) {
        if (filter === undefined || filter === null || filter.length === 0) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        for (let i = 0; i < filter.length; i++) {
            if (filter[i] === value || (value.getTime && filter[i].getTime && value.getTime() === filter[i].getTime())) {
                return true;
            }
        }
        return false;
    }
    static lt(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() < filter.getTime();
        else
            return value < filter;
    }
    static lte(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() <= filter.getTime();
        else
            return value <= filter;
    }
    static gt(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() > filter.getTime();
        else
            return value > filter;
    }
    static gte(value, filter) {
        if (filter === undefined || filter === null) {
            return true;
        }
        if (value === undefined || value === null) {
            return false;
        }
        if (value.getTime && filter.getTime)
            return value.getTime() >= filter.getTime();
        else
            return value >= filter;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVydXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wcmltZW5nL3V0aWxzLyIsInNvdXJjZXMiOlsiZmlsdGVydXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU1QyxNQUFNLE9BQU8sV0FBVztJQUViLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBWSxFQUFFLE1BQWEsRUFBRSxXQUFtQixFQUFFLGVBQXVCO1FBQzFGLElBQUksYUFBYSxHQUFVLEVBQUUsQ0FBQztRQUM5QixJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXRFLElBQUksS0FBSyxFQUFFO1lBQ1AsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEVBQUU7Z0JBQ3BCLEtBQUssSUFBSSxLQUFLLElBQUksTUFBTSxFQUFFO29CQUN0QixJQUFJLFVBQVUsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFFNUcsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxFQUFDLFVBQVUsQ0FBQyxFQUFFO3dCQUNyRCxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUN6QixNQUFNO3FCQUNUO2lCQUNKO2FBQ0o7U0FDSjtRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQ2xDLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDakUsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RSxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTVFLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFdBQVcsQ0FBQztJQUNwRSxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUNoQyxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDakcsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RSxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTVFLE9BQU8sV0FBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUNoQyxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0UsSUFBSSxXQUFXLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUU1RSxPQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQzlCLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUNqRyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU87WUFDL0IsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDOztZQUU1QyxPQUFPLFdBQVcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksV0FBVyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN2SSxDQUFDO0lBRU0sTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUNqQyxJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDakcsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2QyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPO1lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxLQUFLLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7WUFFNUMsT0FBTyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkksQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQWE7UUFDakMsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDaEUsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDcEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBRTtnQkFDeEcsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDMUIsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPO1lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7WUFFMUMsT0FBTyxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQzlCLENBQUM7SUFFTSxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNO1FBQzNCLElBQUksTUFBTSxLQUFLLFNBQVMsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFFRCxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUN2QyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUVELElBQUksS0FBSyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsT0FBTztZQUMvQixPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7O1lBRTNDLE9BQU8sS0FBSyxJQUFJLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRU0sTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsTUFBTTtRQUMxQixJQUFJLE1BQU0sS0FBSyxTQUFTLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtZQUN6QyxPQUFPLElBQUksQ0FBQztTQUNmO1FBRUQsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFDdkMsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFFRCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU87WUFDL0IsT0FBTyxLQUFLLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDOztZQUUxQyxPQUFPLEtBQUssR0FBRyxNQUFNLENBQUM7SUFDOUIsQ0FBQztJQUVNLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDM0IsSUFBSSxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7WUFDekMsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUVELElBQUksS0FBSyxLQUFLLFNBQVMsSUFBSSxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3ZDLE9BQU8sS0FBSyxDQUFDO1NBQ2hCO1FBRUQsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPO1lBQy9CLE9BQU8sS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzs7WUFFM0MsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDO0lBQy9CLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9iamVjdFV0aWxzIH0gZnJvbSAnLi9vYmplY3R1dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXJVdGlscyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGZpbHRlcih2YWx1ZTogYW55W10sIGZpZWxkczogYW55W10sIGZpbHRlclZhbHVlOiBzdHJpbmcsIGZpbHRlck1hdGNoTW9kZTogc3RyaW5nKSB7XG4gICAgICAgIGxldCBmaWx0ZXJlZEl0ZW1zOiBhbnlbXSA9IFtdO1xuICAgICAgICBsZXQgZmlsdGVyVGV4dCA9IE9iamVjdFV0aWxzLnJlbW92ZUFjY2VudHMoZmlsdGVyVmFsdWUpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZFZhbHVlID0gT2JqZWN0VXRpbHMucmVtb3ZlQWNjZW50cyhTdHJpbmcoT2JqZWN0VXRpbHMucmVzb2x2ZUZpZWxkRGF0YShpdGVtLCBmaWVsZCkpKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKEZpbHRlclV0aWxzW2ZpbHRlck1hdGNoTW9kZV0oZmllbGRWYWx1ZSxmaWx0ZXJUZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRJdGVtcztcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIHN0YXJ0c1dpdGgodmFsdWUsIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQgfHwgZmlsdGVyID09PSBudWxsIHx8IGZpbHRlci50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyVmFsdWUgPSBPYmplY3RVdGlscy5yZW1vdmVBY2NlbnRzKGZpbHRlci50b1N0cmluZygpKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgc3RyaW5nVmFsdWUgPSBPYmplY3RVdGlscy5yZW1vdmVBY2NlbnRzKHZhbHVlLnRvU3RyaW5nKCkpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZ1ZhbHVlLnNsaWNlKDAsIGZpbHRlclZhbHVlLmxlbmd0aCkgPT09IGZpbHRlclZhbHVlO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgY29udGFpbnModmFsdWUsIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQgfHwgZmlsdGVyID09PSBudWxsIHx8ICh0eXBlb2YgZmlsdGVyID09PSAnc3RyaW5nJyAmJiBmaWx0ZXIudHJpbSgpID09PSAnJykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBmaWx0ZXJWYWx1ZSA9IE9iamVjdFV0aWxzLnJlbW92ZUFjY2VudHMoZmlsdGVyLnRvU3RyaW5nKCkpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBzdHJpbmdWYWx1ZSA9IE9iamVjdFV0aWxzLnJlbW92ZUFjY2VudHModmFsdWUudG9TdHJpbmcoKSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gc3RyaW5nVmFsdWUuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgIT09IC0xO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZW5kc1dpdGgodmFsdWUsIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQgfHwgZmlsdGVyID09PSBudWxsIHx8IGZpbHRlci50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZmlsdGVyVmFsdWUgPSBPYmplY3RVdGlscy5yZW1vdmVBY2NlbnRzKGZpbHRlci50b1N0cmluZygpKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgc3RyaW5nVmFsdWUgPSBPYmplY3RVdGlscy5yZW1vdmVBY2NlbnRzKHZhbHVlLnRvU3RyaW5nKCkpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHN0cmluZ1ZhbHVlLmluZGV4T2YoZmlsdGVyVmFsdWUsIHN0cmluZ1ZhbHVlLmxlbmd0aCAtIGZpbHRlclZhbHVlLmxlbmd0aCkgIT09IC0xO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZXF1YWxzKHZhbHVlLCBmaWx0ZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gdW5kZWZpbmVkIHx8IGZpbHRlciA9PT0gbnVsbCB8fCAodHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZycgJiYgZmlsdGVyLnRyaW0oKSA9PT0gJycpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSAmJiBmaWx0ZXIuZ2V0VGltZSlcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5nZXRUaW1lKCkgPT09IGZpbHRlci5nZXRUaW1lKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBPYmplY3RVdGlscy5yZW1vdmVBY2NlbnRzKHZhbHVlLnRvU3RyaW5nKCkpLnRvTG93ZXJDYXNlKCkgPT0gT2JqZWN0VXRpbHMucmVtb3ZlQWNjZW50cyhmaWx0ZXIudG9TdHJpbmcoKSkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIG5vdEVxdWFscyh2YWx1ZSwgZmlsdGVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChmaWx0ZXIgPT09IHVuZGVmaW5lZCB8fCBmaWx0ZXIgPT09IG51bGwgfHwgKHR5cGVvZiBmaWx0ZXIgPT09ICdzdHJpbmcnICYmIGZpbHRlci50cmltKCkgPT09ICcnKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmdldFRpbWUgJiYgZmlsdGVyLmdldFRpbWUpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuZ2V0VGltZSgpICE9PSBmaWx0ZXIuZ2V0VGltZSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0VXRpbHMucmVtb3ZlQWNjZW50cyh2YWx1ZS50b1N0cmluZygpKS50b0xvd2VyQ2FzZSgpICE9IE9iamVjdFV0aWxzLnJlbW92ZUFjY2VudHMoZmlsdGVyLnRvU3RyaW5nKCkpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBpbih2YWx1ZSwgZmlsdGVyOiBhbnlbXSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQgfHwgZmlsdGVyID09PSBudWxsIHx8IGZpbHRlci5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsdGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyW2ldID09PSB2YWx1ZSB8fCAodmFsdWUuZ2V0VGltZSAmJiBmaWx0ZXJbaV0uZ2V0VGltZSAmJiB2YWx1ZS5nZXRUaW1lKCkgPT09IGZpbHRlcltpXS5nZXRUaW1lKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBsdCh2YWx1ZSwgZmlsdGVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChmaWx0ZXIgPT09IHVuZGVmaW5lZCB8fCBmaWx0ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5nZXRUaW1lICYmIGZpbHRlci5nZXRUaW1lKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA8IGZpbHRlci5nZXRUaW1lKCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZSA8IGZpbHRlcjtcbiAgICB9XG4gICAgXG4gICAgcHVibGljIHN0YXRpYyBsdGUodmFsdWUsIGZpbHRlcik6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoZmlsdGVyID09PSB1bmRlZmluZWQgfHwgZmlsdGVyID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSAmJiBmaWx0ZXIuZ2V0VGltZSlcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5nZXRUaW1lKCkgPD0gZmlsdGVyLmdldFRpbWUoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlIDw9IGZpbHRlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGd0KHZhbHVlLCBmaWx0ZXIpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKGZpbHRlciA9PT0gdW5kZWZpbmVkIHx8IGZpbHRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmdldFRpbWUgJiYgZmlsdGVyLmdldFRpbWUpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUuZ2V0VGltZSgpID4gZmlsdGVyLmdldFRpbWUoKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlID4gZmlsdGVyO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgc3RhdGljIGd0ZSh2YWx1ZSwgZmlsdGVyKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChmaWx0ZXIgPT09IHVuZGVmaW5lZCB8fCBmaWx0ZXIgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5nZXRUaW1lICYmIGZpbHRlci5nZXRUaW1lKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmdldFRpbWUoKSA+PSBmaWx0ZXIuZ2V0VGltZSgpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgPj0gZmlsdGVyO1xuICAgIH1cbn1cbiJdfQ==