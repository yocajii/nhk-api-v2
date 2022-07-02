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


import ApiClient from "../ApiClient";
import DescriptionList from '../model/DescriptionList';
import Error from '../model/Error';
import NowOnAirList from '../model/NowOnAirList';

/**
* Programs service.
* @module api/ProgramsApi
* @version 1.1.4
*/
export default class ProgramsApi {

    /**
    * Constructs a new ProgramsApi. 
    * @alias module:api/ProgramsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * 番組情報を取得します
     * 番組情報を取得します。地域、チャンネル、対象の番組IDを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} id ID of program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DescriptionList} and HTTP response
     */
    getProgramInfoWithHttpInfo(area, service, id) {
      let postBody = null;
      // verify the required parameter 'area' is set
      if (area === undefined || area === null) {
        throw new Error("Missing the required parameter 'area' when calling getProgramInfo");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling getProgramInfo");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getProgramInfo");
      }

      let pathParams = {
        'area': area,
        'service': service,
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = DescriptionList;
      return this.apiClient.callApi(
        '/info/{area}/{service}/{id}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 番組情報を取得します
     * 番組情報を取得します。地域、チャンネル、対象の番組IDを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} id ID of program
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DescriptionList}
     */
    getProgramInfo(area, service, id) {
      return this.getProgramInfoWithHttpInfo(area, service, id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付を指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array} and HTTP response
     */
    getProgramsWithHttpInfo(area, service, date) {
      let postBody = null;
      // verify the required parameter 'area' is set
      if (area === undefined || area === null) {
        throw new Error("Missing the required parameter 'area' when calling getPrograms");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling getPrograms");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getPrograms");
      }

      let pathParams = {
        'area': area,
        'service': service,
        'date': date
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Array;
      return this.apiClient.callApi(
        '/list/{area}/{service}/{date}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付を指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array}
     */
    getPrograms(area, service, date) {
      return this.getProgramsWithHttpInfo(area, service, date)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 指定されたジャンルの番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付、ジャンルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @param {String} genre Genre code defined by ARIB STD-B10
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array} and HTTP response
     */
    getProgramsByGenreWithHttpInfo(area, service, date, genre) {
      let postBody = null;
      // verify the required parameter 'area' is set
      if (area === undefined || area === null) {
        throw new Error("Missing the required parameter 'area' when calling getProgramsByGenre");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling getProgramsByGenre");
      }
      // verify the required parameter 'date' is set
      if (date === undefined || date === null) {
        throw new Error("Missing the required parameter 'date' when calling getProgramsByGenre");
      }
      // verify the required parameter 'genre' is set
      if (genre === undefined || genre === null) {
        throw new Error("Missing the required parameter 'genre' when calling getProgramsByGenre");
      }

      let pathParams = {
        'area': area,
        'service': service,
        'date': date,
        'genre': genre
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Array;
      return this.apiClient.callApi(
        '/genre/{area}/{service}/{genre}/{date}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 指定されたジャンルの番組リストを取得します
     * 番組リストを取得します。地域、チャンネル、日付、ジャンルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @param {String} date Date in YYYY-MM-DD format
     * @param {String} genre Genre code defined by ARIB STD-B10
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array}
     */
    getProgramsByGenre(area, service, date, genre) {
      return this.getProgramsByGenreWithHttpInfo(area, service, date, genre)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * 放送中の番組リストを取得します
     * 放送中の番組リストを取得します。地域、チャンネルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/NowOnAirList} and HTTP response
     */
    getProgramsNowOnAirWithHttpInfo(area, service) {
      let postBody = null;
      // verify the required parameter 'area' is set
      if (area === undefined || area === null) {
        throw new Error("Missing the required parameter 'area' when calling getProgramsNowOnAir");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling getProgramsNowOnAir");
      }

      let pathParams = {
        'area': area,
        'service': service
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = NowOnAirList;
      return this.apiClient.callApi(
        '/now/{area}/{service}.json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * 放送中の番組リストを取得します
     * 放送中の番組リストを取得します。地域、チャンネルを指定する必要があります。
     * @param {String} area ID of broadcast area
     * @param {String} service ID of channel or channel group
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NowOnAirList}
     */
    getProgramsNowOnAir(area, service) {
      return this.getProgramsNowOnAirWithHttpInfo(area, service)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
