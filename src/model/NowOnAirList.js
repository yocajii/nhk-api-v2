/**
 * NHK API v2
 * JavaScriptによるNHK番組表APIのクライアントです
 *
 * The version of the OpenAPI document: 2.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NowOnAirListNowonairList from './NowOnAirListNowonairList';

/**
 * The NowOnAirList model module.
 * @module model/NowOnAirList
 * @version 1.1.15
 */
class NowOnAirList {
    /**
     * Constructs a new <code>NowOnAirList</code>.
     * @alias module:model/NowOnAirList
     * @param nowonairList {module:model/NowOnAirListNowonairList} 
     */
    constructor(nowonairList) { 
        
        NowOnAirList.initialize(this, nowonairList);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, nowonairList) { 
        obj['nowonair_list'] = nowonairList;
    }

    /**
     * Constructs a <code>NowOnAirList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NowOnAirList} obj Optional instance to populate.
     * @return {module:model/NowOnAirList} The populated <code>NowOnAirList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NowOnAirList();

            if (data.hasOwnProperty('nowonair_list')) {
                obj['nowonair_list'] = NowOnAirListNowonairList.constructFromObject(data['nowonair_list']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/NowOnAirListNowonairList} nowonair_list
 */
NowOnAirList.prototype['nowonair_list'] = undefined;






export default NowOnAirList;

