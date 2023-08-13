import random
from datetime import datetime, timedelta
import csv

def generate_random_json_field():
    types = ['cooked', 'raw']
    random_type = random.choice(types)

    start_date = datetime(2023, 8, 13)
    end_date = datetime(2023, 12, 31)  # You can adjust the end date as needed
    random_date = start_date + timedelta(days=random.randint(0, (end_date - start_date).days))

    random_time = datetime.combine(random_date, datetime.min.time()) + timedelta(hours=random.randint(0, 23), minutes=random.randint(0, 59))

    random_quantity = random.randint(1, 10)

    random_json = {
        'type': random_type,
        'time': random_time.strftime('%Y-%m-%d %H:%M:%S'),
        'quantity': random_quantity
    }

    return random_json

def write_to_csv(data, csv_file):
    with open(csv_file, mode='w', newline='') as file:
        fieldnames = ['type', 'time', 'quantity']
        writer = csv.DictWriter(file, fieldnames=fieldnames)

        writer.writeheader()
        for item in data:
            writer.writerow(item)

if __name__ == '__main__':
    random_fields = []
    for _ in range(150):  # Generate 5 random JSON fields
        random_field = generate_random_json_field()
        random_fields.append(random_field)
    
    csv_file = 'random_data.csv'
    write_to_csv(random_fields, csv_file)
    
    print(f'Data written to {csv_file}')
