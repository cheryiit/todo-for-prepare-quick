const todoData = {
    "q1_clustering": {
        "title": "Soru 1: Clustering (20 puan)",
        "sections": {
            "complexity_analysis": {
                "title": "Cluster Metrikleri ve Karmaşıklık Analizi",
                "items": [
                    {
                        "id": "cluster-metrics",
                        "text": "1.a) Cluster Metrikleri Karmaşıklık Analizi (7 puan)",
                        "description": "n elemanlı bir cluster için Centroid, Radius ve Diameter hesaplamalarının asimptotik karmaşıklık analizi.",
                        "subItems": [
                            {
                                "id": "centroid-calc",
                                "text": "1. Centroid Hesaplama - O(n)",
                                "description": "1) Her nokta için x,y koordinatlarını topla\n2) Toplam koordinatları nokta sayısına böl\n3) Karmaşıklık: Her nokta için sabit işlem = O(n)"
                            },
                            {
                                "id": "radius-calc",
                                "text": "2. Radius Hesaplama - O(n)",
                                "description": "1) Centroid'i hesapla - O(n)\n2) Her nokta için centroid'e uzaklık hesapla - O(n)\n3) Maximum uzaklığı bul - O(n)\n4) Toplam karmaşıklık: O(n)"
                            },
                            {
                                "id": "diameter-calc",
                                "text": "3. Diameter Hesaplama - O(n²)",
                                "description": "1) Her nokta çifti için uzaklık hesapla - O(n²)\n2) Maximum uzaklığı bul - O(1)\n3) Toplam karmaşıklık: O(n²)"
                            }
                        ]
                    },
                    {
                        "id": "algorithm-comparison",
                        "text": "1.b) Clustering Algoritmaları Karmaşıklık Karşılaştırması (7 puan)",
                        "description": "k: cluster sayısı, n: kayıt sayısı, t: iterasyon sayısı parametreleri için en kötü durum karmaşıklıkları.",
                        "subItems": [
                            {
                                "id": "agglomerative",
                                "text": "1. Agglomerative Clustering - O(n³)",
                                "description": "1) Başlangıç mesafe matrisi hesaplama - O(n²)\n2) Her iterasyonda:\n   - En yakın iki cluster'ı bul - O(n²)\n   - Mesafe matrisini güncelle - O(n)\n3) n-1 iterasyon\n4) Toplam karmaşıklık: O(n³)"
                            },
                            {
                                "id": "kmeans",
                                "text": "2. K-Means Clustering - O(k*n*t)",
                                "description": "1) Her iterasyonda:\n   - Her nokta için en yakın centroid'i bul - O(k*n)\n   - Centroid'leri güncelle - O(n)\n2) t iterasyon\n3) Toplam karmaşıklık: O(k*n*t)"
                            },
                            {
                                "id": "kmedoid",
                                "text": "3. K-Medoid Clustering - O(k*n²*t)",
                                "description": "1) Her iterasyonda:\n   - Her medoid için tüm noktalarla mesafe hesabı - O(k*n²)\n   - Yeni medoid seçimi - O(n)\n2) t iterasyon\n3) Toplam karmaşıklık: O(k*n²*t)"
                            }
                        ]
                    },
                    {
                        "id": "kmedoid-nonconvex",
                        "text": "1.c) K-Medoid ve Non-convex Kümeler (6 puan)",
                        "description": "K-Medoid algoritmasının non-convex şekilli kümeleri temsil edebilme yeteneği analizi.",
                        "subItems": [
                            {
                                "id": "convex-definition",
                                "text": "1. Convex/Non-convex Tanımı",
                                "description": "1) Convex küme: İki nokta arası doğru parçası küme içinde\n2) Non-convex küme: İki nokta arası doğru parçası küme dışına çıkabilir"
                            },
                            {
                                "id": "kmedoid-capability",
                                "text": "2. K-Medoid Analizi",
                                "description": "1) İfade yanlıştır\n2) K-Medoid medoid noktaları kullanarak non-convex kümeleri temsil edebilir\n3) Örnek: U şeklindeki küme birden fazla medoid ile temsil edilebilir"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q2_neural_networks": {
        "title": "Soru 2: Neural Networks (15 puan)",
        "sections": {
            "delta_rule": {
                "title": "Delta Training Rule Analizi",
                "items": [
                    {
                        "id": "delta-rule-analysis",
                        "text": "2.a) Delta Training Rule ve Hata Minimizasyonu (7 puan)",
                        "description": "Delta Training Rule'un Perceptron öğrenmesinde hata minimizasyonu etkisi analizi.",
                        "subItems": [
                            {
                                "id": "error-minimization",
                                "text": "1. İfadenin Analizi",
                                "description": "1) İfade yanlıştır\n2) Delta Rule her zaman global minimuma ulaşamaz\n3) Lokal minimumlara takılabilir"
                            },
                            {
                                "id": "convergence",
                                "text": "2. Yakınsama Koşulları",
                                "description": "1) Lineer ayrılabilir problemlerde yakınsama garantisi var\n2) Lineer ayrılamayan problemlerde yakınsama garantisi yok\n3) Öğrenme oranı seçimi önemli"
                            },
                            {
                                "id": "limitations",
                                "text": "3. Kısıtlamalar",
                                "description": "1) Gradyan iniş tabanlı optimizasyon\n2) Başlangıç ağırlıklarına bağımlılık\n3) Öğrenme oranına hassasiyet"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q3_decision_trees": {
        "title": "Soru 3: Decision Trees (30 puan)",
        "sections": {
            "id3_analysis": {
                "title": "ID3 Algoritması Analizi",
                "items": [
                    {
                        "id": "tree-size-bias",
                        "text": "3.a) ID3 ve Ağaç Boyutu Biası (7 puan)",
                        "description": "ID3 algoritmasının küçük ağaçları tercih etme eğilimi analizi.",
                        "subItems": [
                            {
                                "id": "bias-statement",
                                "text": "1. İfadenin Analizi",
                                "description": "1) İfade yanlıştır\n2) ID3 information gain'e göre seçim yapar\n3) Küçük ağaç tercihi dolaylı bir sonuçtur"
                            },
                            {
                                "id": "tree-growth",
                                "text": "2. Ağaç Büyümesi",
                                "description": "1) Ağaç büyüdükçe öğrenme performansı artar\n2) Aşırı büyüme overfitting'e neden olur\n3) Durdurma kriterleri önemlidir"
                            },
                            {
                                "id": "performance-balance",
                                "text": "3. Performans Dengesi",
                                "description": "1) Öğrenme-genelleme dengesi\n2) Hata ve tesadüfleri öğrenme riski\n3) Information gain hızlı daralması önemli"
                            }
                        ]
                    },
                    {
                        "id": "information-gain",
                        "text": "3.b) Information Gain Heuristic Biası (8 puan)",
                        "description": "Information Gain'in az değer alan özellikleri tercih etme eğilimi.",
                        "subItems": [
                            {
                                "id": "bias-explanation",
                                "text": "1. Bias Analizi",
                                "description": "1) İfade doğrudur\n2) Az değerli özellikler daha yüksek gain üretir\n3) Entropi hesabından kaynaklanan doğal bias"
                            },
                            {
                                "id": "gain-calculation",
                                "text": "2. Gain Hesaplama",
                                "description": "1) Entropi bazlı hesaplama\n2) Değer sayısı arttıkça entropi artar\n3) Gain değeri düşer"
                            },
                            {
                                "id": "bias-impact",
                                "text": "3. Bias Etkisi",
                                "description": "1) Basit split'ler tercih edilir\n2) Aşırı karmaşık ağaçlar önlenir\n3) Gain ratio ile düzeltilebilir"
                            }
                        ]
                    },
                    {
                        "id": "hypothesis-space",
                        "text": "3.c) Hipotez Uzayı Bias Oranları (15 puan)",
                        "description": "ID3 ve Inductive Learning için hipotez uzayı bias oranı formülasyonu.",
                        "subItems": [
                            {
                                "id": "id3-formulation",
                                "text": "1. ID3 Formülasyonu",
                                "description": "1) Girdi sayısı (i) etkisi\n2) Değer sayısı (v) etkisi\n3) Sonsuz veri varsayımı"
                            },
                            {
                                "id": "inductive-formulation",
                                "text": "2. Inductive Learning",
                                "description": "1) Girdi sayısı (i) etkisi\n2) Değer sayısı (v) etkisi\n3) Eşit değer sayısı varsayımı"
                            },
                            {
                                "id": "comparison",
                                "text": "3. Karşılaştırma",
                                "description": "1) Formül farklılıkları\n2) Varsayım etkileri\n3) Bias oranı sonuçları"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q4_neural_networks_advanced": {
        "title": "Soru 4: Neural Networks İleri Konular (30 puan)",
        "sections": {
            "optimization": {
                "title": "Optimizasyon Teknikleri",
                "items": [
                    {
                        "id": "error-functions",
                        "text": "4.a) Hata Minimizasyon Fonksiyonları (7 puan)",
                        "description": "İki farklı hata minimizasyon fonksiyonunun kullanım nedenleri.",
                        "subItems": [
                            {
                                "id": "function-comparison",
                                "text": "1. Fonksiyon Karşılaştırması",
                                "description": "1) Her fonksiyonun avantajları\n2) Kullanım amaçları\n3) Performans etkileri"
                            },
                            {
                                "id": "optimization-effects",
                                "text": "2. Optimizasyon Etkileri",
                                "description": "1) Gradyan hesaplama farklılıkları\n2) Yakınsama özellikleri\n3) Lokal minimum davranışları"
                            }
                        ]
                    },
                    {
                        "id": "momentum-term",
                        "text": "4.b) Momentum Term Kullanımı (8 puan)",
                        "description": "Momentum teriminin ağırlık güncellemelerindeki rolü.",
                        "subItems": [
                            {
                                "id": "momentum-purpose",
                                "text": "1. Kullanım Amacı",
                                "description": "1) Lokal minimumlardan kaçınma\n2) Öğrenme hızını artırma\n3) Salınımları azaltma"
                            },
                            {
                                "id": "implementation",
                                "text": "2. Uygulama",
                                "description": "1) Önceki güncellemenin etkisi\n2) Momentum katsayısı seçimi\n3) Gradyan ile ilişkisi"
                            }
                        ]
                    },
                    {
                        "id": "penalty-term",
                        "text": "4.c) Penalty Term Kullanımı (8 puan)",
                        "description": "Penalty teriminin hata fonksiyonundaki rolü.",
                        "subItems": [
                            {
                                "id": "penalty-purpose",
                                "text": "1. Kullanım Amacı",
                                "description": "1) Overfitting önleme\n2) Ağırlık büyüklüklerini kontrol\n3) Genelleme yeteneğini artırma"
                            },
                            {
                                "id": "implementation-details",
                                "text": "2. Uygulama Detayları",
                                "description": "1) Regularizasyon terimi seçimi\n2) Lambda parametresi etkisi\n3) Hata fonksiyonuna entegrasyon"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q5_other_algorithms": {
        "title": "Soru 5: Diğer Öğrenme Algoritmaları (10 puan)",
        "sections": {
            "theory": {
                "title": "Teorik Kavramlar",
                "items": [
                    {
                        "id": "information-theory",
                        "text": "5.a) Information Theory Perspektifi (5 puan)",
                        "description": "Occam's Razor ve MDL prensiplerinin karşılaştırması.",
                        "subItems": [
                            {
                                "id": "principle-comparison",
                                "text": "1. Prensip Karşılaştırması",
                                "description": "1) Occam's Razor: En basit açıklama en iyisidir\n2) MDL: En kısa kodlama en iyisidir\n3) Bilgi teorisi bağlantısı"
                            },
                            {
                                "id": "practical-implications",
                                "text": "2. Pratik Etkiler",
                                "description": "1) Model seçimine etkileri\n2) Karmaşıklık ölçümü\n3) Uygulama farklılıkları"
                            }
                        ]
                    },
                    {
                        "id": "curse-dimensionality",
                        "text": "5.c) Curse of Dimensionality (5 puan)",
                        "description": "Lazy Learning'de boyut lanetinin nedenleri.",
                        "subItems": [
                            {
                                "id": "dimension-effects",
                                "text": "1. Boyut Etkileri",
                                "description": "1) Uzaklık ölçümü problemi\n2) Veri seyrekliği\n3) Hesaplama karmaşıklığı"
                            },
                            {
                                "id": "practical-problems",
                                "text": "2. Pratik Sorunlar",
                                "description": "1) Örnek sayısı yetersizliği\n2) Mesafe metriği anlamsızlaşması\n3) Komşuluk tanımı zorluğu"
                            }
                        ]
                    }
                ]
            }
        }
    },
    "q6_heuristics": {
        "title": "Soru 6: Decision Tree Heuristics (20 puan)",
        "sections": {
            "binary_trees": {
                "title": "Binary Trees ve Heuristikler",
                "items": [
                    {
                        "id": "tree-analysis",
                        "text": "Binary Tree Sayısı Analizi",
                        "description": "n düğümlü binary tree sayısının asimptotik tahmini.",
                        "subItems": [
                            {
                                "id": "conversion-principle",
                                "text": "1. Dönüşüm Prensibi",
                                "description": "1) Her ağaç binary tree'ye dönüştürülebilir\n2) Dönüşüm yöntemi\n3) Yapısal özellikler"
                            },
                            {
                                "id": "counting-formula",
                                "text": "2. Sayma Formülü",
                                "description": "1) Catalan sayıları bağlantısı\n2) Recursive formülasyon\n3) Asimptotik büyüme"
                            },
                            {
                                "id": "heuristic-necessity",
                                "text": "3. Heuristik Gerekliliği",
                                "description": "1) Brute force imkansızlığı\n2) Arama uzayı büyüklüğü\n3) Hesaplama karmaşıklığı"
                            }
                        ]
                    }
                ]
            }
        }
    }
};
