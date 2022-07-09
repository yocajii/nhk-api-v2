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
import Description from './Description';

/**
 * The DescriptionListList model module.
 * @module model/DescriptionListList
 * @version 1.1.9
 */
class DescriptionListList {
    /**
     * Constructs a new <code>DescriptionListList</code>.
     * @alias module:model/DescriptionListList
     */
    constructor() { 
        
        DescriptionListList.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DescriptionListList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescriptionListList} obj Optional instance to populate.
     * @return {module:model/DescriptionListList} The populated <code>DescriptionListList</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DescriptionListList();

            if (data.hasOwnProperty('g1')) {
                obj['g1'] = ApiClient.convertToType(data['g1'], [Description]);
            }
            if (data.hasOwnProperty('g2')) {
                obj['g2'] = ApiClient.convertToType(data['g2'], [Description]);
            }
            if (data.hasOwnProperty('e1')) {
                obj['e1'] = ApiClient.convertToType(data['e1'], [Description]);
            }
            if (data.hasOwnProperty('e2')) {
                obj['e2'] = ApiClient.convertToType(data['e2'], [Description]);
            }
            if (data.hasOwnProperty('e3')) {
                obj['e3'] = ApiClient.convertToType(data['e3'], [Description]);
            }
            if (data.hasOwnProperty('e4')) {
                obj['e4'] = ApiClient.convertToType(data['e4'], [Description]);
            }
            if (data.hasOwnProperty('s1')) {
                obj['s1'] = ApiClient.convertToType(data['s1'], [Description]);
            }
            if (data.hasOwnProperty('s2')) {
                obj['s2'] = ApiClient.convertToType(data['s2'], [Description]);
            }
            if (data.hasOwnProperty('s3')) {
                obj['s3'] = ApiClient.convertToType(data['s3'], [Description]);
            }
            if (data.hasOwnProperty('s4')) {
                obj['s4'] = ApiClient.convertToType(data['s4'], [Description]);
            }
            if (data.hasOwnProperty('r1')) {
                obj['r1'] = ApiClient.convertToType(data['r1'], [Description]);
            }
            if (data.hasOwnProperty('r2')) {
                obj['r2'] = ApiClient.convertToType(data['r2'], [Description]);
            }
            if (data.hasOwnProperty('r3')) {
                obj['r3'] = ApiClient.convertToType(data['r3'], [Description]);
            }
            if (data.hasOwnProperty('n1')) {
                obj['n1'] = ApiClient.convertToType(data['n1'], [Description]);
            }
            if (data.hasOwnProperty('n2')) {
                obj['n2'] = ApiClient.convertToType(data['n2'], [Description]);
            }
            if (data.hasOwnProperty('n3')) {
                obj['n3'] = ApiClient.convertToType(data['n3'], [Description]);
            }
            if (data.hasOwnProperty('tv')) {
                obj['tv'] = ApiClient.convertToType(data['tv'], [Description]);
            }
            if (data.hasOwnProperty('radio')) {
                obj['radio'] = ApiClient.convertToType(data['radio'], [Description]);
            }
            if (data.hasOwnProperty('netradio')) {
                obj['netradio'] = ApiClient.convertToType(data['netradio'], [Description]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Description>} g1
 */
DescriptionListList.prototype['g1'] = undefined;

/**
 * @member {Array.<module:model/Description>} g2
 */
DescriptionListList.prototype['g2'] = undefined;

/**
 * @member {Array.<module:model/Description>} e1
 */
DescriptionListList.prototype['e1'] = undefined;

/**
 * @member {Array.<module:model/Description>} e2
 */
DescriptionListList.prototype['e2'] = undefined;

/**
 * @member {Array.<module:model/Description>} e3
 */
DescriptionListList.prototype['e3'] = undefined;

/**
 * @member {Array.<module:model/Description>} e4
 */
DescriptionListList.prototype['e4'] = undefined;

/**
 * @member {Array.<module:model/Description>} s1
 */
DescriptionListList.prototype['s1'] = undefined;

/**
 * @member {Array.<module:model/Description>} s2
 */
DescriptionListList.prototype['s2'] = undefined;

/**
 * @member {Array.<module:model/Description>} s3
 */
DescriptionListList.prototype['s3'] = undefined;

/**
 * @member {Array.<module:model/Description>} s4
 */
DescriptionListList.prototype['s4'] = undefined;

/**
 * @member {Array.<module:model/Description>} r1
 */
DescriptionListList.prototype['r1'] = undefined;

/**
 * @member {Array.<module:model/Description>} r2
 */
DescriptionListList.prototype['r2'] = undefined;

/**
 * @member {Array.<module:model/Description>} r3
 */
DescriptionListList.prototype['r3'] = undefined;

/**
 * @member {Array.<module:model/Description>} n1
 */
DescriptionListList.prototype['n1'] = undefined;

/**
 * @member {Array.<module:model/Description>} n2
 */
DescriptionListList.prototype['n2'] = undefined;

/**
 * @member {Array.<module:model/Description>} n3
 */
DescriptionListList.prototype['n3'] = undefined;

/**
 * @member {Array.<module:model/Description>} tv
 */
DescriptionListList.prototype['tv'] = undefined;

/**
 * @member {Array.<module:model/Description>} radio
 */
DescriptionListList.prototype['radio'] = undefined;

/**
 * @member {Array.<module:model/Description>} netradio
 */
DescriptionListList.prototype['netradio'] = undefined;






export default DescriptionListList;

