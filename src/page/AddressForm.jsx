import React, { useState } from 'react';

const AddAddressForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        name: '',
        surname: '',
        phone: '',
        city: '',
        district: '',
        neighborhood: '',
        addressDetails: '',
    });

    const cities = [
        "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Aksaray", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın",
        "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum",
        "Denizli", "Diyarbakır", "Düzce", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep",
        "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Iğdır", "Isparta", "İstanbul", "İzmir", "Kahramanmaraş",
        "Karabük", "Karaman", "Kastamonu", "Kayseri", "Kırıkkale", "Kırklareli", "Kırşehir", "Kocaeli", "Konya",
        "Kütahya", "Malatya", "Manisa", "Mardin", "Mersin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Osmaniye",
        "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa",
        "Uşak", "Van", "Yalova", "Yozgat", "Zonguldak"
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Form verilerini API'ye gönderme işlemi
        fetch('https://workintech-fe-ecommerce.onrender.com/user/address', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              alert('Adres başarıyla eklendi!');
              setFormData({
                title: '',
                name: '',
                surname: '',
                phone: '',
                city: '',
                district: '',
                neighborhood: '',
                addressDetails: '',
              });
            } else {
              alert('Adres eklenirken bir hata oluştu.');
            }
          })
          .catch((error) => {
            console.error('Hata:', error);
            alert('Bir hata oluştu, lütfen tekrar deneyin.');
          });
      };

    return (
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Yeni Adres Ekle</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-2">
                        <label className="block text-gray-700">Adres Başlığı</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ev adresi"
                        />
                    </div>

                    <div className="space-y-2 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-gray-700">Ad</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Alişan"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Soyad</label>
                            <input
                                type="text"
                                name="surname"
                                value={formData.surname}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Karababa"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700">Telefon</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="05376845834"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700">Şehir</label>
                        <select
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Şehir Seçin</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700">İlçe</label>
                        <input
                            type="text"
                            name="district"
                            value={formData.district}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Esenler"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700">Mahalle</label>
                        <input
                            type="text"
                            name="neighborhood"
                            value={formData.neighborhood}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Mahalle Adı"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-gray-700">Adres Detayları</label>
                        <textarea
                            name="addressDetails"
                            value={formData.addressDetails}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            placeholder="Sokak, bina ve kapı numaraları"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition"
                    >
                        Adres Ekle
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAddressForm;
