var wms_layers = [];

var format_gadm41_VNM_2_0 = new ol.format.GeoJSON();
var features_gadm41_VNM_2_0 = format_gadm41_VNM_2_0.readFeatures(json_gadm41_VNM_2_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_VNM_2_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_VNM_2_0.addFeatures(features_gadm41_VNM_2_0);
var lyr_gadm41_VNM_2_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_VNM_2_0, 
                style: style_gadm41_VNM_2_0,
                popuplayertitle: 'gadm41_VNM_2',
                interactive: true,
                title: 'gadm41_VNM_2'
            });
var format_gadm41_VNM_1_1 = new ol.format.GeoJSON();
var features_gadm41_VNM_1_1 = format_gadm41_VNM_1_1.readFeatures(json_gadm41_VNM_1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gadm41_VNM_1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gadm41_VNM_1_1.addFeatures(features_gadm41_VNM_1_1);
var lyr_gadm41_VNM_1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_gadm41_VNM_1_1, 
                style: style_gadm41_VNM_1_1,
                popuplayertitle: 'gadm41_VNM_1',
                interactive: true,
                title: 'gadm41_VNM_1'
            });
var format_BMT_2_Huyen_2 = new ol.format.GeoJSON();
var features_BMT_2_Huyen_2 = format_BMT_2_Huyen_2.readFeatures(json_BMT_2_Huyen_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMT_2_Huyen_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMT_2_Huyen_2.addFeatures(features_BMT_2_Huyen_2);
var lyr_BMT_2_Huyen_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMT_2_Huyen_2, 
                style: style_BMT_2_Huyen_2,
                popuplayertitle: 'BMT_2_Huyen',
                interactive: true,
                title: '<img src="styles/legend/BMT_2_Huyen_2.png" /> BMT_2_Huyen'
            });
var format_BMT_3 = new ol.format.GeoJSON();
var features_BMT_3 = format_BMT_3.readFeatures(json_BMT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMT_3.addFeatures(features_BMT_3);
var lyr_BMT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMT_3, 
                style: style_BMT_3,
                popuplayertitle: 'BMT',
                interactive: true,
                title: '<img src="styles/legend/BMT_3.png" /> BMT'
            });
var format_BMT_3_xa_4 = new ol.format.GeoJSON();
var features_BMT_3_xa_4 = format_BMT_3_xa_4.readFeatures(json_BMT_3_xa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMT_3_xa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMT_3_xa_4.addFeatures(features_BMT_3_xa_4);
var lyr_BMT_3_xa_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMT_3_xa_4, 
                style: style_BMT_3_xa_4,
                popuplayertitle: 'BMT_3_xa',
                interactive: true,
                title: '<img src="styles/legend/BMT_3_xa_4.png" /> BMT_3_xa'
            });
var format_BMT_GI_allcopy_5 = new ol.format.GeoJSON();
var features_BMT_GI_allcopy_5 = format_BMT_GI_allcopy_5.readFeatures(json_BMT_GI_allcopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMT_GI_allcopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMT_GI_allcopy_5.addFeatures(features_BMT_GI_allcopy_5);
var lyr_BMT_GI_allcopy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMT_GI_allcopy_5, 
                style: style_BMT_GI_allcopy_5,
                popuplayertitle: 'BMT_GI_all copy',
                interactive: true,
                title: '<img src="styles/legend/BMT_GI_allcopy_5.png" /> BMT_GI_all copy'
            });
var format_BMT_GI_all_6 = new ol.format.GeoJSON();
var features_BMT_GI_all_6 = format_BMT_GI_all_6.readFeatures(json_BMT_GI_all_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMT_GI_all_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMT_GI_all_6.addFeatures(features_BMT_GI_all_6);
var lyr_BMT_GI_all_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BMT_GI_all_6, 
                style: style_BMT_GI_all_6,
                popuplayertitle: 'BMT_GI_all',
                interactive: true,
                title: '<img src="styles/legend/BMT_GI_all_6.png" /> BMT_GI_all'
            });
var group_2022 = new ol.layer.Group({
                                layers: [lyr_BMT_3,lyr_BMT_3_xa_4,lyr_BMT_GI_allcopy_5,lyr_BMT_GI_all_6,],
                                fold: 'open',
                                title: '越南行政區域 2022年'});
var group_2015 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: '越南行政區域2015年'});

lyr_gadm41_VNM_2_0.setVisible(true);lyr_gadm41_VNM_1_1.setVisible(true);lyr_BMT_2_Huyen_2.setVisible(true);lyr_BMT_3.setVisible(true);lyr_BMT_3_xa_4.setVisible(true);lyr_BMT_GI_allcopy_5.setVisible(true);lyr_BMT_GI_all_6.setVisible(true);
var layersList = [lyr_gadm41_VNM_2_0,lyr_gadm41_VNM_1_1,lyr_BMT_2_Huyen_2,group_2022];
lyr_gadm41_VNM_2_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_gadm41_VNM_1_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BMT_2_Huyen_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_BMT_3.set('fieldAliases', {'GID_1': 'GID_1', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'NAME_1': 'NAME_1', 'VARNAME_1': 'VARNAME_1', 'NL_NAME_1': 'NL_NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'CC_1': 'CC_1', 'HASC_1': 'HASC_1', 'ISO_1': 'ISO_1', });
lyr_BMT_3_xa_4.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_BMT_GI_allcopy_5.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_BMT_GI_all_6.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_gadm41_VNM_2_0.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_gadm41_VNM_1_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_BMT_2_Huyen_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_BMT_3.set('fieldImages', {'GID_1': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'CC_1': 'TextEdit', 'HASC_1': 'TextEdit', 'ISO_1': 'TextEdit', });
lyr_BMT_3_xa_4.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_BMT_GI_allcopy_5.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_BMT_GI_all_6.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_gadm41_VNM_2_0.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_gadm41_VNM_1_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_BMT_2_Huyen_2.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_BMT_3.set('fieldLabels', {'GID_1': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'NAME_1': 'no label', 'VARNAME_1': 'no label', 'NL_NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'CC_1': 'no label', 'HASC_1': 'no label', 'ISO_1': 'no label', });
lyr_BMT_3_xa_4.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_BMT_GI_allcopy_5.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_BMT_GI_all_6.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_BMT_GI_all_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});