ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32718").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_DEM_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "DEM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/DEM_1.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [432238.394130, 8681286.805871, 523737.883905, 8776142.395638]
                            })
                        });
var lyr_acc_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/acc_2.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [432238.394130, 8681286.805871, 523737.883905, 8776142.395638]
                            })
                        });
var lyr_dir_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "dir",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/dir_3.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [432238.394130, 8681286.805871, 523737.883905, 8776142.395638]
                            })
                        });
var lyr_fill_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/fill_4.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [432238.394130, 8681286.805871, 523737.883905, 8776142.395638]
                            })
                        });
var lyr_c_acc_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_acc",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_acc_5.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [447249.314093, 8685832.795860, 513456.013930, 8770894.675651]
                            })
                        });
var lyr_c_cauce_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_cauce",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_cauce_6.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [447249.314093, 8685832.795860, 513456.013930, 8770894.675651]
                            })
                        });
var lyr_c_fill_7 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_fill",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_fill_7.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [447249.314093, 8685832.795860, 513456.013930, 8770894.675651]
                            })
                        });
var lyr_c_reclass_8 = new ol.layer.Image({
                            opacity: 1,
                            title: "c_reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/c_reclass_8.png",
    attributions: ' ',
                                projection: 'EPSG:32718',
                                alwaysInRange: true,
                                imageExtent: [447249.314093, 8685832.795860, 513456.013930, 8770894.675651]
                            })
                        });
var format_c_shp_9 = new ol.format.GeoJSON();
var features_c_shp_9 = format_c_shp_9.readFeatures(json_c_shp_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_shp_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_shp_9.addFeatures(features_c_shp_9);
var lyr_c_shp_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_shp_9, 
                style: style_c_shp_9,
                interactive: true,
                title: '<img src="styles/legend/c_shp_9.png" /> c_shp'
            });
var format_c_curvas_10 = new ol.format.GeoJSON();
var features_c_curvas_10 = format_c_curvas_10.readFeatures(json_c_curvas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_curvas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_curvas_10.addFeatures(features_c_curvas_10);
var lyr_c_curvas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_curvas_10, 
                style: style_c_curvas_10,
                interactive: true,
                title: '<img src="styles/legend/c_curvas_10.png" /> c_curvas'
            });
var format_c_rios_11 = new ol.format.GeoJSON();
var features_c_rios_11 = format_c_rios_11.readFeatures(json_c_rios_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_c_rios_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_rios_11.addFeatures(features_c_rios_11);
var lyr_c_rios_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_c_rios_11, 
                style: style_c_rios_11,
                interactive: true,
                title: '<img src="styles/legend/c_rios_11.png" /> c_rios'
            });
var format_sub_cuencas_12 = new ol.format.GeoJSON();
var jsonSource_sub_cuencas_12 = new ol.source.Vector({
    attributions: ' ',
    format: format_sub_cuencas_12
});var lyr_sub_cuencas_12 = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_sub_cuencas_12, 
    style: style_sub_cuencas_12,
    interactive: true,
    title: "sub_cuencas"
});

function getsub_cuencas_12Json(geojson) {
    var features_sub_cuencas_12 = format_sub_cuencas_12.readFeatures(geojson);
    jsonSource_sub_cuencas_12.addFeatures(features_sub_cuencas_12);
}
var lyr_sub_cuencas_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://200.123.29.106:80/geoserver/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "geonode:sub_cuencas",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "sub_cuencas",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_sub_cuencas_13, 0]);

lyr_GoogleSatellite_0.setVisible(true);lyr_DEM_1.setVisible(true);lyr_acc_2.setVisible(true);lyr_dir_3.setVisible(true);lyr_fill_4.setVisible(true);lyr_c_acc_5.setVisible(true);lyr_c_cauce_6.setVisible(true);lyr_c_fill_7.setVisible(true);lyr_c_reclass_8.setVisible(true);lyr_c_shp_9.setVisible(true);lyr_c_curvas_10.setVisible(true);lyr_c_rios_11.setVisible(true);lyr_sub_cuencas_12.setVisible(true);lyr_sub_cuencas_13.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DEM_1,lyr_acc_2,lyr_dir_3,lyr_fill_4,lyr_c_acc_5,lyr_c_cauce_6,lyr_c_fill_7,lyr_c_reclass_8,lyr_c_shp_9,lyr_c_curvas_10,lyr_c_rios_11,lyr_sub_cuencas_12,lyr_sub_cuencas_13];
lyr_c_shp_9.set('fieldAliases', {'ID': 'ID', 'VALUE': 'VALUE', 'NAME': 'NAME', 'a_Km2': 'a_Km2', 'P_Km': 'P_Km', });
lyr_c_curvas_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'CONTOUR': 'CONTOUR', 'LENGTH': 'LENGTH', });
lyr_c_rios_11.set('fieldAliases', {'SEGMENT_ID': 'SEGMENT_ID', 'NODE_A': 'NODE_A', 'NODE_B': 'NODE_B', 'BASIN': 'BASIN', 'ORDER': 'ORDER', 'ORDER_CELL': 'ORDER_CELL', 'LENGTH': 'LENGTH', });
lyr_sub_cuencas_12.set('fieldAliases', {'fid_1': 'fid_1', 'fid': 'fid', 'OBJECTID': 'OBJECTID', 'CUENCAS': 'CUENCAS', 'CUEN_MAY': 'CUEN_MAY', 'perim_km': 'perim_km', 'Area_km2': 'Area_km2', 'L_t_cor_km': 'L_t_cor_km', 'P_med_Sc': 'P_med_Sc', 'Kc': 'Kc', 'Ff': 'Ff', 'Dd': 'Dd', 'Es': 'Es', 'A_med_km': 'A_med_km', 'Lcp_km': 'Lcp_km', 'am_2': 'am_2', 'am_5': 'am_5', 'am_10': 'am_10', 'am_25': 'am_25', 'am_50': 'am_50', 'am_75': 'am_75', 'am_100': 'am_100', 'am_200': 'am_200', 'am_500': 'am_500', 'am_1000': 'am_1000', 'd_ag_m3': 'd_ag_m3', 'd_hum_m3': 'd_hum_m3', 'd_total_m3': 'd_total_m3', 'oferta_m3': 'oferta_m3', 'balance_m3': 'balance_m3', 'NIVEL_5': 'NIVEL_5', 'NIVEL_6': 'NIVEL_6', 'NIVEL_7': 'NIVEL_7', 'NOMB_UH_5': 'NOMB_UH_5', 'NOMB_UH_6': 'NOMB_UH_6', 'NOMB_UH_7': 'NOMB_UH_7', 'N_C_Cons': 'N_C_Cons', 'N_C_Agr': 'N_C_Agr', 'Area_ha': 'Area_ha', });
lyr_c_shp_9.set('fieldImages', {'ID': 'TextEdit', 'VALUE': 'TextEdit', 'NAME': 'TextEdit', 'a_Km2': 'TextEdit', 'P_Km': 'TextEdit', });
lyr_c_curvas_10.set('fieldImages', {'fid': '', 'ID': '', 'CONTOUR': '', 'LENGTH': '', });
lyr_c_rios_11.set('fieldImages', {'SEGMENT_ID': '', 'NODE_A': '', 'NODE_B': '', 'BASIN': '', 'ORDER': '', 'ORDER_CELL': '', 'LENGTH': '', });
lyr_sub_cuencas_12.set('fieldImages', {'fid_1': '', 'fid': '', 'OBJECTID': '', 'CUENCAS': '', 'CUEN_MAY': '', 'perim_km': '', 'Area_km2': '', 'L_t_cor_km': '', 'P_med_Sc': '', 'Kc': '', 'Ff': '', 'Dd': '', 'Es': '', 'A_med_km': '', 'Lcp_km': '', 'am_2': '', 'am_5': '', 'am_10': '', 'am_25': '', 'am_50': '', 'am_75': '', 'am_100': '', 'am_200': '', 'am_500': '', 'am_1000': '', 'd_ag_m3': '', 'd_hum_m3': '', 'd_total_m3': '', 'oferta_m3': '', 'balance_m3': '', 'NIVEL_5': '', 'NIVEL_6': '', 'NIVEL_7': '', 'NOMB_UH_5': '', 'NOMB_UH_6': '', 'NOMB_UH_7': '', 'N_C_Cons': '', 'N_C_Agr': '', 'Area_ha': '', });
lyr_c_shp_9.set('fieldLabels', {'ID': 'no label', 'VALUE': 'no label', 'NAME': 'no label', 'a_Km2': 'no label', 'P_Km': 'no label', });
lyr_c_curvas_10.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'CONTOUR': 'no label', 'LENGTH': 'no label', });
lyr_c_rios_11.set('fieldLabels', {'SEGMENT_ID': 'no label', 'NODE_A': 'no label', 'NODE_B': 'no label', 'BASIN': 'header label', 'ORDER': 'no label', 'ORDER_CELL': 'no label', 'LENGTH': 'no label', });
lyr_sub_cuencas_12.set('fieldLabels', {'fid_1': 'no label', 'fid': 'no label', 'OBJECTID': 'no label', 'CUENCAS': 'no label', 'CUEN_MAY': 'no label', 'perim_km': 'no label', 'Area_km2': 'no label', 'L_t_cor_km': 'no label', 'P_med_Sc': 'no label', 'Kc': 'no label', 'Ff': 'no label', 'Dd': 'no label', 'Es': 'no label', 'A_med_km': 'no label', 'Lcp_km': 'no label', 'am_2': 'no label', 'am_5': 'no label', 'am_10': 'no label', 'am_25': 'no label', 'am_50': 'no label', 'am_75': 'no label', 'am_100': 'no label', 'am_200': 'no label', 'am_500': 'no label', 'am_1000': 'no label', 'd_ag_m3': 'no label', 'd_hum_m3': 'no label', 'd_total_m3': 'no label', 'oferta_m3': 'no label', 'balance_m3': 'no label', 'NIVEL_5': 'no label', 'NIVEL_6': 'no label', 'NIVEL_7': 'no label', 'NOMB_UH_5': 'no label', 'NOMB_UH_6': 'no label', 'NOMB_UH_7': 'no label', 'N_C_Cons': 'no label', 'N_C_Agr': 'no label', 'Area_ha': 'no label', });
lyr_sub_cuencas_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});